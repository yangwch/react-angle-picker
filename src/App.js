import React from 'react';
import styled from 'styled-components';
import AnglePicker from './AnglePicker';


const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid rgb(0, 0, 0);
  margin: 200px auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

const ValueWrapper = styled.div`
  padding: 20px;
`;

function App() {
  const [angle, setAngle] = React.useState(45);
  const onChange = val => {
    console.log('onChange', val);
  }
  const onAfterChange = val => {
    console.log('onAfterChange', val);
    console.log('set state', val);
    setAngle(val)
  }
  return (
    <Wrapper>
      <ValueWrapper>{angle}</ValueWrapper>
      <AnglePicker
        value={angle}
        circleColor='#ff0000'
        width={150}
        circleWidth={20}
        onChange={onChange}
        onAfterChange={onAfterChange}
      />
    </Wrapper>
  );
}

export default App;
