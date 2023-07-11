import React, { useState } from 'react';
import { styled } from 'styled-components';
import { PrimaryBtn } from './button';

function Modal() {
  let [isOpen1, setIsOpen1] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  const toggleModalClose = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleModalOpen = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <>
      <h1>Modal</h1>
      <Container>
        <PrimaryBtn bg='pink' size='small' onClick={toggleModalClose}>
          open modal
        </PrimaryBtn>

        <div>
          {isOpen1 && (
            <ModalContainer>
              <ModalContent>
                닫기와 확인 버튼 2개가 있고, 외부 영역을 눌러도 모달이 닫히지
                않아요. <p>닫기 버튼을 눌러주세요</p>
                <ModalBtn>
                  <PrimaryBtn
                    bg='primary'
                    size='small'
                    onClick={toggleModalClose}
                  >
                    닫기
                  </PrimaryBtn>
                  <PrimaryBtn bg='pink' size='small'>
                    확인
                  </PrimaryBtn>
                </ModalBtn>
              </ModalContent>
            </ModalContainer>
          )}
        </div>

        <PrimaryBtn bg='primary' size='large' onClick={toggleModalOpen}>
          open modal
        </PrimaryBtn>
        <div>
          {isOpen2 && (
            <ModalContainer onClick={toggleModalOpen}>
              <ModalContent>
                확인 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
                <ModalBtn>
                  <PrimaryBtn bg='pink' size='small'>
                    확인
                  </PrimaryBtn>
                </ModalBtn>
              </ModalContent>
            </ModalContainer>
          )}
        </div>
      </Container>
    </>
  );
}

export default Modal;

const Container = styled.div`
  padding: 10px;
  display: flex;
  button {
    margin: 10px;
  }
`;

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  z-index: 2;
  background-color: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContent = styled.div`
  padding: 15px;
  width: 500px;
  height: 200px;
  background-color: #fff;
`;

const ModalBtn = styled.div`
  height: 80px;
  margin-top: 80px;
`;
