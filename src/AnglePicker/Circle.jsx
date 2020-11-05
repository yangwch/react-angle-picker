import React from 'react';
import styled from 'styled-components';
import { CIRCLE_WIDTH, startPoint } from './Constant';

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
  background: ${props => props.color ? props.color : 'rgba(0,0,0,0.4)'};
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = props => {
  const { x, y, color } = props;
  return (
    <CircleWrapper style={{ left: x, top: y }}>
      <IconCircle color={color} />
    </CircleWrapper>
  );
};

export default Circle;