import React from 'react';
import styled from 'styled-components';
import AnglePicker from './AnglePicker';


const Wrapper = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid rgb(0, 0, 0);
  margin: 200px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  justify-items: center;
`;

function App() {
  return (
    <Wrapper>
      <AnglePicker />
    </Wrapper>
  );
}

export default App;
