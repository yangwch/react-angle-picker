import React from 'react';
import styled from 'styled-components';
import { CIRCLE_WIDTH } from './constant';

interface WrapperProps {
  left: number;
  top: number;
}
const CircleWrapper = styled.div<WrapperProps>`
  position: absolute;
  width: 0;
  height: 0;
  left: ${(props: WrapperProps) => props.left}px;
  top: ${(props: WrapperProps) => props.top}px;
`;

interface IconProps {
  width: number | undefined;
  color: string | undefined;
}
const IconCircle = styled.div<IconProps>`
  width: ${(props: IconProps) => props.width || CIRCLE_WIDTH}px;
  height: ${(props: IconProps) => props.width || CIRCLE_WIDTH}px;
  background: ${(props: IconProps) =>
    props.color ? props.color : 'rgba(0,0,0,0.4)'};
  -webkit-border-radius: 50%;
  border-radius: 50%;
  transform: translate(-50%, -50%);
`;

interface CircelProps {
  x: number;
  y: number;
  color?: string | undefined;
  width?: number | undefined;
}

const Circle = (props: CircelProps) => {
  const { x, y, color, width } = props;
  return (
    <CircleWrapper left={x} top={y}>
      <IconCircle color={color} width={width} />
    </CircleWrapper>
  );
};

export default Circle;
