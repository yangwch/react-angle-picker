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
  return (
    <Wrapper>
      <AnglePicker value={angle} onChange={setAngle} />
    </Wrapper>
  );
}

export default App;
