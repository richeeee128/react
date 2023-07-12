import React, { useState, useRef, useEffect } from 'react';
import { styled } from 'styled-components';
import { PrimaryBtn } from './button';

function Modal() {
  let [isOpen1, setIsOpen1] = useState(false);
  let [isOpen2, setIsOpen2] = useState(false);

  const nonOutsideCloseModal = () => {
    setIsOpen1(!isOpen1);
  };
  const outsideCloseModal = () => {
    setIsOpen2(true);
  };

  return (
    <>
      <h1>Modal</h1>
      <Container>
        <PrimaryBtn bg='pink' size='small' onClick={nonOutsideCloseModal}>
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
                    onClick={nonOutsideCloseModal}
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
        <div>
          <PrimaryBtn bg='primary' size='large' onClick={outsideCloseModal}>
            open modal
          </PrimaryBtn>
          {isOpen2 && (
            <Modal2Components isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
          )}
        </div>
      </Container>
    </>
  );
}

export default Modal;

export const Modal2Components = (props) => {
  const { isOpen2, setIsOpen2 } = props;

  const toggleModal2Close = () => {
    setIsOpen2(false);
  };

  const wrapperRef = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  });
  const handleClickOutside = (event) => {
    if (wrapperRef && !wrapperRef.current.contains(event.target)) {
      setIsOpen2(false);
    } else {
      setIsOpen2(true);
    }
  };
  return (
    <div>
      {isOpen2 && (
        <ModalContainer>
          <ModalContent ref={wrapperRef} value={isOpen2}>
            확인 버튼 1개가 있고, 외부 영역을 누르면 모달이 닫혀요.
            <ModalBtn>
              <PrimaryBtn bg='pink' size='small' onClick={toggleModal2Close}>
                확인
              </PrimaryBtn>
            </ModalBtn>
          </ModalContent>
        </ModalContainer>
      )}
    </div>
  );
};

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
