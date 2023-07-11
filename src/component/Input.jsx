import React, { useState } from 'react';
import { NumericFormat } from 'react-number-format';
import styled from 'styled-components';
import { PrimaryBtn } from './button';

function Input() {
  const [value, setValue] = useState('');
  const [name, setName] = useState('');

  // 콜백을 이용해 값을 가져오기
  const onChangeValueHandler = (values) => {
    setValue(values.value);
  };

  // 이름 값 가져오기
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };

  const onClickHandler = (e) => {
    e.preventDefault();
    if (name === '') {
      alert('이름과 가격 모두 입력해주세요.');
      return setValue('');
    }
    alert(`{name: ${name}, price: ${value} }`);
    // 초기화
    setName('');
    setValue('');
  };

  return (
    <Container>
      <h1>Input</h1>
      <form>
        <Label> 이름 : </Label>
        <StInput>
          <input
            type='text'
            placeholder='입력해주세요'
            value={name}
            onChange={onChangeNameHandler}
          />
        </StInput>
        <Label> 가격 : </Label>
        {/* 넘버 포맷 패키지를 이용해 천 단위 콤마 넣기 */}
        <StInput>
          <NumericFormat
            placeholder='0'
            thousandSeparator={true}
            value={value}
            onValueChange={onChangeValueHandler}
          />
        </StInput>
        <PrimaryBtn bg='pink' size='small' onClick={onClickHandler}>
          저장
        </PrimaryBtn>
      </form>
    </Container>
  );
}

export default Input;

const Container = styled.div`
  padding: 10px;
  height: 130px;
`;

const Label = styled.label`
  margin-right: 5px;
  font-weight: bold;
`;

const StInput = styled.span`
  padding-right: 10px;
  input {
    width: 150px;
    height: 28px;
    border: none;
    border-bottom: 2px solid #ccc;
    outline: none;
  }
  input:focus {
    border-bottom-color: #669eff;
  }
`;
