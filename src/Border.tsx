import styled from 'styled-components';
import { WIDTH } from './constant';

interface BorderProps {
  width?: number | undefined;
  borderColor?: string | undefined;
  borderStyle?: string | undefined;
  borderWidth?: number | undefined;
}

const Border = styled.div<BorderProps>`
  width: ${(props: BorderProps) => props.width || WIDTH}px;
  height: ${(props: BorderProps) => props.width || WIDTH}px;
  position: relative;
  border: ${(props: BorderProps) =>
      typeof props.borderWidth === 'number' ? props.borderWidth : 1}px
    ${(props: BorderProps) => props.borderStyle || 'solid'}
    ${(props: BorderProps) => props.borderColor || '#ccc'};
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  box-sizing: border-box;
`;

export default Border;
