import React, { useState } from "react";
import styled, { css } from "styled-components";
import { MdAdd } from 'react-icons/md';

const CircleButton = styled.button`
  background: #38d9a9;
  z-index: 5;
  cursor: pointer;
  width: 80px;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  left: 50%;
  bottom: 0%;
  transform: translate(-50%, 50%);
  font-size: 60px;
  color: #fff;
  border-radius: 50%;
  border: none;
  outline: none;
  transition: 0.125s all ease-in;
  &:hover {
    background: #63e6be;
  }
  &:active {
    background: #20c997;
  }
  ${props => props.open && css`
    background: #ff6b6b;
    &:hover {
      background: #ff8787;
    }
    &:active {
      background: #fa5252;
    }
    transform: translate(-50%, 50%) rotate(45deg);
  `}
`

const InsertFormPositioner = styled.div`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
`
const InsertForm = styled.div`
  background: #f8f9fa;
  padding: 32px 32px 72px;
  border-bottom-left-radius: 16px;
  border-bottom-right-radius: 16px;
  border-top: 1px solid #e9cefe;
`

const Input = styled.input`
  padding: 12px;
  border-radius: 4px;
  border: 1px solid #dee2e6;
  box-sizing: border-box;
  width: 100%;
  outline: none;
  font-size: 18px;
`

function TodoCreate () {
  const [open, setOpen] = useState(false)
  const onToggle = () => setOpen(!open)

  return (
    <>
      {open && (
        <InsertFormPositioner>
          <InsertForm>
            <Input 
              placeholder="할 일을 입력 후, Enter를 누르세요" 
              autoFocus
            />
          </InsertForm>
        </InsertFormPositioner>
      )}
      <CircleButton 
        open={open}
        onClick={onToggle}
      >
        <MdAdd />
      </CircleButton>
    </>
  )
}

export default TodoCreate;