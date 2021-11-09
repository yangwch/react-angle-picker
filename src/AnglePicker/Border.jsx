import styled from 'styled-components'
import { WIDTH } from './constant';


const Border = styled.div.attrs(props => ({
  style: {
    width: props.width || WIDTH,
    height: props.width || WIDTH,
    borderColor: props.borderColor,
    borderStyle: props.borderStyle,
    borderWidth: props.borderWidth,
  }
}))`
  position: relative;
  border: 1px solid #ccc;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
  border-radius: 50%;
  box-sizing: border-box;
`;


export default Border
