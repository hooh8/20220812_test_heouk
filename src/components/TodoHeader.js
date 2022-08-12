import styled from "styled-components";

export default function TodoHeader({ count }) {
  return (
    <Block>
      <h2>TodoList</h2>
      <p>number : {count}</p>
    </Block>
  );
}

const Block = styled.header`
  padding: 10px;
  h2 {
    text-align: center;
  }
  p {
    font-size: 0.8rem;
  }
`;
