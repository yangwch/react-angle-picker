import React, { Component } from 'react';
import styled from 'styled-components';
import { WIDTH, BORDER_WIDTH, CIRCLE_WIDTH } from './constant';
import Circle from './Circle';
import { getCenter, getStartPoint } from './service';


const Container = styled.div.attrs(props => ({
  style: {
    width: props.width || WIDTH,
    height: props.width || WIDTH,
  }
}))`
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  box-sizing: border-box;
`;


// 弧度转角度
export const radianToAngle = radian => {
  const angle =  Math.round((radian * 180) / Math.PI);
  if (angle < 0) {
    return 360 + angle;
  }
  return angle;
}


export default class AnglePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: props.value || 0,
    };

    this.wrapperRef = React.createRef(null);
    this.mousedown = this.mousedown.bind(this);
    this.mousemove = this.mousemove.bind(this);
    this.mouseup = this.mouseup.bind(this);
    this.getStartPoint = this.getStartPoint.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.getRotatedPosition = this.getRotatedPosition.bind(this);
  }

  getCenter() {
    const { width = WIDTH, borderWidth = BORDER_WIDTH } = this.props;
    const center = getCenter(width, borderWidth)
    return center;
  }

  getStartPoint() {
    const { width = WIDTH, circleWidth = CIRCLE_WIDTH, borderWidth = BORDER_WIDTH } = this.props;
    return getStartPoint(width, circleWidth, borderWidth);
  }

  getRotatedPosition(angle) {
    const center = this.getCenter();
    const startPoint = this.getStartPoint();
    const theta = (angle / 180) * Math.PI;
    var x = (startPoint.x - center.x) * Math.cos(theta) - (startPoint.y - center.y) * Math.sin(theta) + center.x;
    var y = (startPoint.x - center.x) * Math.sin(theta) + (startPoint.y - center.y) * Math.cos(theta) + center.y;
    return { x, y };
  }

  // 计算点击位置的角度
  getNewAngleByEvent(e) {
    const wrapperEl = this.wrapperRef && this.wrapperRef.current;
    if (e && wrapperEl) {
      const center = this.getCenter();
      const { clientX, clientY } = e;
      const rect = wrapperEl.getClientRects()[0];
      const { x , y } = rect;
      // 中心点坐标
      const centerP = { x: x + center.x, y: y + center.y };
      // 计算弧度
      const nx = clientX - centerP.x;
      const ny = clientY - centerP.y;
      const radian = Math.atan2(ny, nx);
      return radianToAngle(radian);
    }
    return null;
  }

  mousedown(e) {
    const angle = this.getNewAngleByEvent(e);
    if (typeof angle === 'number') {
      this.setState({ angle });
      if (this.props.onChange) {
        this.props.onChange(angle);
      }
      this.addMouseListeners();
    }
  }

  addMouseListeners() {
    document.addEventListener('mousemove', this.mousemove);
    document.addEventListener('mouseup', this.mouseup);
  }

  removeMouseListeners() {
    document.removeEventListener('mousemove', this.mousemove);
    document.removeEventListener('mouseup', this.mouseup);
  }

  mousemove(e) {
    const angle = this.getNewAngleByEvent(e);
    if (typeof angle === 'number') {
      this.setState({ angle });
      if (this.props.onChange) {
        this.props.onChange(angle);
      }
    }
  }

  mouseup(e) {
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
    const { circleColor, circleWidth, width } = this.props;
    const { getRotatedPosition, mousedown } = this;
    const rotatedPosition = getRotatedPosition(angle);
    return (
      <Container ref={this.wrapperRef} onMouseDown={mousedown} width={width}>
        <Circle x={rotatedPosition.x} y={rotatedPosition.y} color={circleColor} width={circleWidth} />
      </Container>
    );
  }
}
