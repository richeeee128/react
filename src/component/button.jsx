import React from 'react';
import styled from 'styled-components';
import { VscBellDot, VscChevronRight } from 'react-icons/vsc';

function Button({ size, bg }) {
  return (
    <>
      <h1>Button</h1>
      <Container>
        {/* 알럿 창 띄우기 */}
        <StBtn
          bg='pink'
          size='large'
          onClick={() => alert('내가 안 해냄 ㅠㅠ')}
        >
          Large Primaray Button
          <label>
            <VscChevronRight />
          </label>
        </StBtn>
        <StBtn bg='pink' size='medium'>
          Medium
        </StBtn>
        <StBtn bg='pink' size='small'>
          Small
        </StBtn>
      </Container>
      <Container>
        {/* 프롬포트 창 띄우기 */}
        <StBtn
          bg='primary'
          size='large'
          onClick={() => console.log(prompt('쉽지 않죠?'))}
        >
          Large Primaray Button
          <label>
            <VscBellDot />
          </label>
        </StBtn>
        <StBtn bg='primary' size='medium'>
          Medium
        </StBtn>
        <StBtn bg='primary' size='small'>
          Small
        </StBtn>
      </Container>
    </>
  );
}

export default Button;

const Container = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  margin: 10px;
`;

const btnSize = (size) => {
  switch (size) {
    case 'large':
      return `width : 200px; height: 50px;`;
    case 'medium':
      return `width : 130px; height : 45px;`;
    case 'small':
      return `width : 100px; height : 40px;`;
    default:
      return '';
  }
};

const btnBackgroundColor = (color) => {
  switch (color) {
    case 'pink':
      return `background-color:pink;`;
    case 'primary':
      return `background-color:#9fd4ff;`;
    default:
      return '';
  }
};

const StBtn = styled.button`
  border-radius: 5px;
  font-weight: bold;
  border-style: none;
  box-shadow: 2px 3px 0 rgba(0, 0, 0, 0.3);
  ${(props) => btnSize(props.size)}
  ${(props) => btnBackgroundColor(props.bg)}
  &:active {
    box-shadow: 1px 1px 0 rgba(0, 0, 0, 0.3);
  }
`;

export const PrimaryBtn = ({ children, ...restProps }) => {
  return <StBtn {...restProps}>{children}</StBtn>;
};
