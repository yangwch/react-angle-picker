import React, { Component } from 'react';
import { WIDTH, BORDER_WIDTH, CIRCLE_WIDTH } from './constant';
import Circle from './Circle';
import { getCenter, getStartPoint, radianToAngle } from './service';
import Border from './Border';
import { Point } from './interface';

/** for props check */
export interface PickerProps {
  // 边框色
  borderColor?: string | undefined;
  // 小圆点颜色
  pointerColor?: string | undefined;
  // 小圆点尺寸
  pointerWidth?: number | undefined;
  // 宽度
  width?: number | undefined;
  // 角度值
  value?: number;
  // 边框样式 dashed dotted solid ...
  borderStyle?: string | undefined;
  // 边框宽度
  borderWidth?: number | undefined;
  // 角度变化
  onChange?: (newValue: number) => void | undefined;
  // 鼠标抬起，角度改变完毕
  onAfterChange?: (interactiveValue: number) => void | undefined;
  // 鼠标移动时是否阻止默认行为
  preventDefault?: boolean;
}

interface PickerState {
  angle: number;
}

export default class AnglePicker extends Component<PickerProps, PickerState> {
  constructor(props: PickerProps) {
    super(props);
    this.state = {
      angle: props.value || 0,
    };

    this.mousemove = this.mousemove.bind(this);
    this.mouseup = this.mouseup.bind(this);
    this.getStartPoint = this.getStartPoint.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.getRotatedPosition = this.getRotatedPosition.bind(this);
    this.getNewAngleByEvent = this.getNewAngleByEvent.bind(this);
  }

  wrapperRef = React.createRef<HTMLDivElement>();

  static getDerivedStateFromProps(props: PickerProps, state: PickerState) {
    if (typeof props.value === 'number' && state.angle !== props.value) {
      return {
        angle: props.value,
      };
    }
    return null;
  }

  getCenter(): Point {
    const { width = WIDTH, borderWidth = BORDER_WIDTH } = this.props;
    return getCenter(width, borderWidth);
  }

  getStartPoint() {
    const {
      width = WIDTH,
      pointerWidth = CIRCLE_WIDTH,
      borderWidth = BORDER_WIDTH,
    } = this.props;
    return getStartPoint(width, pointerWidth, borderWidth);
  }

  getRotatedPosition(angle: number) {
    const center = this.getCenter();
    const startPoint = this.getStartPoint();
    const theta = (angle / 180) * Math.PI;
    var x =
      (startPoint.x - center.x) * Math.cos(theta) -
      (startPoint.y - center.y) * Math.sin(theta) +
      center.x;
    var y =
      (startPoint.x - center.x) * Math.sin(theta) +
      (startPoint.y - center.y) * Math.cos(theta) +
      center.y;
    return { x, y };
  }

  // 计算点击位置的角度
  getNewAngleByEvent = (e: MouseEvent | React.MouseEvent) => {
    const wrapperEl = this.wrapperRef && this.wrapperRef.current;
    if (e && wrapperEl) {
      const center = this.getCenter();
      const { clientX, clientY } = e;
      const rect = wrapperEl.getClientRects()[0];
      const { x, y } = rect;
      // 中心点坐标
      const centerP = { x: x + center.x, y: y + center.y };
      // 计算弧度
      const nx = clientX - centerP.x;
      const ny = clientY - centerP.y;
      const radian = Math.atan2(ny, nx);
      return radianToAngle(radian);
    }
    return null;
  };

  mousedown: React.MouseEventHandler<HTMLDivElement> = (
    e: MouseEvent | React.MouseEvent,
  ) => {
    const angle = this.getNewAngleByEvent(e);
    if (typeof angle === 'number') {
      this.setState({ angle });
      if (this.props.onChange) {
        this.props.onChange(angle);
      }
      this.addMouseListeners();
    }
  };

  addMouseListeners() {
    document.addEventListener('mousemove', this.mousemove);
    document.addEventListener('mouseup', this.mouseup);
    document.addEventListener('contextmenu', this.mouseup);
    document.addEventListener('pointercancel', this.mouseup);
  }

  removeMouseListeners() {
    document.removeEventListener('mousemove', this.mousemove);
    document.removeEventListener('mouseup', this.mouseup);
  }

  mousemove(e: MouseEvent) {
    if (this.props.preventDefault) {
      e.preventDefault();
    }
    const angle = this.getNewAngleByEvent(e);
    if (typeof angle === 'number') {
      this.setState({ angle });
      if (this.props.onChange) {
        this.props.onChange(angle);
      }
    }
  }

  mouseup(e: MouseEvent) {
    if (this.props.preventDefault) {
      e.preventDefault();
    }
    this.removeMouseListeners();
    const angle = this.getNewAngleByEvent(e);
    if (typeof angle === 'number') {
      this.setState({ angle });
      if (this.props.onAfterChange) {
        this.props.onAfterChange(angle);
      } else if (this.props.onChange) {
        this.props.onChange(angle);
      }
    }
  }

  render() {
    const { angle } = this.state;
    const {
      pointerColor,
      pointerWidth,
      width,
      borderColor,
      borderStyle,
      borderWidth,
    } = this.props;
    const { getRotatedPosition, mousedown } = this;
    const rotatedPosition = getRotatedPosition(angle);
    return (
      <Border
        ref={this.wrapperRef}
        onMouseDown={mousedown}
        width={width}
        borderColor={borderColor}
        borderStyle={borderStyle}
        borderWidth={borderWidth}
      >
        <Circle
          x={rotatedPosition.x}
          y={rotatedPosition.y}
          color={pointerColor}
          width={pointerWidth}
        />
      </Border>
    );
  }
}
