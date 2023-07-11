import React from 'react';
import { styled } from 'styled-components';

function Select() {
  const [selected, setSelected] = useState('');
  const [options, setOptions] = useState('');

  return (
    <div>
      <h1>Select</h1>
      <Container>
        <select>
          <option value='react'>리액트</option>
          <option value='java'>자바</option>
          <option value='sping'>스프링</option>
          <option value='react-native'>리액트 네이티브</option>
        </select>
        <select>
          <option value='react'>리액트</option>
          <option value='java'>자바</option>
          <option value='sping'>스프링</option>
          <option value='react-native'>리액트 네이티브</option>
        </select>
      </Container>
    </div>
  );
}

export default Select;

const Container = styled.div`
  height: 100px;
`;
