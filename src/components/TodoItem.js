import { useState } from "react";
import styled, { css, keyframes } from "styled-components";
import { MdRemoveCircleOutline } from "react-icons/md";

export default function TodoItem({ todo, onToggle, onRemove }) {
  const [disappear, setDisappear] = useState(false);
  return (
    <Block onClick={() => onToggle(todo.id)} done={todo.done} disappear={disappear}>
      <p>{todo.text}</p>
      <BtnDel
        onClick={(e) => {
          e.stopPropagation();
          setDisappear(true);
          setTimeout(() => {
            onRemove(todo.id);
          }, 300);
        }}
      >
        <div>
          <MdRemoveCircleOutline />
        </div>
      </BtnDel>
    </Block>
  );
}

const slideOut = keyframes`
    to {
        transform: translate(-100%);
    }
`;

const Block = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #ddd;
  padding: 0 10px;
  font-size: 0.8rem;
  user-select: none;

  cursor: pointer;
  ${({ done }) =>
    done &&
    css`
      p {
        text-decoration: line-through;
        color: red;
      }
    `}
  ${({ disappear }) =>
    disappear &&
    css`
      animation: ${slideOut};
      animation-duration: 0.4s;
    `}
`;

const BtnDel = styled.div`
  div {
    background-color: whitesmoke;
    color: red;
    padding: 5px;
  }
`;
