import React from 'react';
import styled from 'styled-components';
import { CIRCLE_WIDTH } from './constant';

const CircleWrapper = styled.div.attrs(props => ({
  style: {
    left: props.left,
    top: props.top,
  }
}))`
  position: absolute;
  width: 0;
  height: 0;
`;

const IconCircle = styled.div.attrs(props => ({
  style: {
    width: props.width || CIRCLE_WIDTH,
    height: props.width || CIRCLE_WIDTH,
  },
}))`
  background: ${props => props.color ? props.color : 'rgba(0,0,0,0.4)'};
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

const Circle = props => {
  const { x, y, color, width } = props;
  return (
    <CircleWrapper left={x} top={y}>
      <IconCircle color={color} width={width} />
    </CircleWrapper>
  );
};

export default Circle;