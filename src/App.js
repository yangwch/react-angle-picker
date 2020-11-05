import React from 'react';
import styled from 'styled-components';
import AnglePicker from './AnglePicker';


const Wrapper = styled.div`
  width: 300px;
  height: 300px;
  border: 1px solid rgb(0, 0, 0);
  margin: 200px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
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
      <AnglePicker
        value={angle}
        onChange={onChange}
        onAfterChange={onAfterChange}
        circleColor='#ff0000'
      />
    </Wrapper>
  );
}

export default App;
