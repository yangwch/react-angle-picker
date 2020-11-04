import React, { Component } from 'react';
import styled from 'styled-components';
import { WIDTH, BORDER_WIDTH, CIRCLE_WIDTH } from './Constant';

// 起点
const startPoint = {
  x: WIDTH - CIRCLE_WIDTH / 2 - BORDER_WIDTH,
  y: WIDTH / 2,
};

const center = {
  x: WIDTH / 2 - BORDER_WIDTH,
  y: WIDTH / 2 - BORDER_WIDTH,
};


const Container = styled.div`
  width: ${WIDTH}px;
  height: ${WIDTH}px;
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  box-sizing: border-box;
`;

const CircleWrapper = styled.div`
  left: ${startPoint.x}px;
  top: ${startPoint.y}px;
  position: absolute;
  width: 0;
  height: 0;
`;

const IconCircle = styled.div`
  width: ${CIRCLE_WIDTH}px;
  height: ${CIRCLE_WIDTH}px;
  background-color: rgba(0, 0, 0, 0.4);
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = props => {
  const { x, y } = props;
  return (
    <CircleWrapper style={{ left: x, top: y }}>
      <IconCircle />
    </CircleWrapper>
  );
}

export default class AnglePicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      angle: props.angle || 0,
    };
  }

//   var theta = Math.PI;
// var r = rotate(ballA, center, Math.PI / 3);
// ballB.x = r.x;
// ballB.y = r.y;

  getRotatedPosition(angle) {
    const theta = (angle / 180) * Math.PI;
    var _x = (startPoint.x - center.x) * Math.cos(theta) - (startPoint.y - center.y) * Math.sin(theta) + center.x;
    var _y = (startPoint.x - center.x) * Math.sin(theta) + (startPoint.y - center.y) * Math.cos(theta) + center.y;
    return {x: _x, y: _y};
  }

  render() {
    const { angle } = this.state;
    const rotatedPosition = this.getRotatedPosition(angle)
    return (
      <Container>
        <Circle x={rotatedPosition.x} y={rotatedPosition.y} />
      </Container>
    );
  }
}
