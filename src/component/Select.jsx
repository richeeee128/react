import React, { useState } from 'react';
import styled from 'styled-components';

function Select() {
  const [selected1, setSelected1] = useState(false);
  const [selected2, setSelected2] = useState(false);
  const [isOpen1, setIsOpen1] = useState('');
  const [isOpen2, setIsOpen2] = useState('');

  const options1 = [
    { value: 'react', label: '리액트' },
    { value: 'java', label: '자바' },
    { value: 'spring', label: '스프링' },
    { value: 'react-native', label: '리액트 네이티브' },
  ];
  const options2 = [
    { value: 'react', label: '리액트' },
    { value: 'java', label: '자바' },
    { value: 'spring', label: '스프링' },
    { value: 'react-native', label: '리액트 네이티브' },
  ];

  const handleSelect1 = (value) => {
    setSelected1(value);
    setIsOpen1(false);
  };
  const handleSelect2 = (value) => {
    setSelected2(value);
    setIsOpen2(false);
  };

  const toggleIsOpen1 = () => {
    setIsOpen1(!isOpen1);
    setIsOpen2(false);
  };

  const toggleIsOpen2 = () => {
    setIsOpen2(!isOpen2);
    setIsOpen1(false);
  };

  return (
    <>
      <h1>Select</h1>
      <Container>
        <SelectBox1>
          <SelectToggle onClick={toggleIsOpen1}>
            {selected1 ? selected1 : '선택하세요'}
          </SelectToggle>
          {isOpen1 && (
            <OptionList>
              {options1.map((option) => (
                <OptionItem
                  key={option.value}
                  onClick={() => handleSelect1(option.label)}
                >
                  {option.label}
                </OptionItem>
              ))}
            </OptionList>
          )}
        </SelectBox1>

        <SelectBox2>
          <SelectToggle onClick={toggleIsOpen2}>
            {selected2 ? selected2 : '선택하세요'}
          </SelectToggle>
          {isOpen2 && (
            <OptionListClose>
              {options2.map((option) => (
                <OptionItem
                  key={option.value}
                  onClick={() => handleSelect2(option.label)}
                >
                  {option.label}
                </OptionItem>
              ))}
            </OptionListClose>
          )}
        </SelectBox2>
      </Container>
    </>
  );
}

export default Select;

const Container = styled.div`
  height: 160px;
  border: 3px solid #eee;
  overflow: hidden;
  display: flex;
  padding: 10px;
`;

const SelectBox1 = styled.div`
  width: 200px;
  height: 150px;
  font-size: 18px;
`;
const SelectBox2 = styled.div`
  width: 200px;
  height: 150px;
  font-size: 18px;
`;

const SelectToggle = styled.div`
  text-align: center;
  padding-top: 10px;
  background-color: pink;
  width: 172px;
  height: 35px;
  border-radius: 8px;
`;

const OptionList = styled.div`
  width: 170px;
  height: 200px;
  z-index: 3;
  text-align: center;
  position: absolute;

  background-color: #ffe9f8;
`;

const OptionListClose = styled.div`
  width: 170px;
  height: 200px;
  text-align: center;
  background-color: #ffe9f8;
`;

const OptionItem = styled.div`
  width: 150px;
  height: 25px;
  padding: 10px;
  border: 1px solid #fff;
  &:hover {
    background-color: #e17789;
  }
`;
