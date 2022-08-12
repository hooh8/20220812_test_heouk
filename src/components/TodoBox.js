import styled from "styled-components";

export default function TodoBox({ children }) {
  return (
    <Container>
      <Block>{children}</Block>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: skyblue;
`;

const Block = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 500px;
  border: 1px solid #bbb;
  border-radius: 6px;
  background-color: whitesmoke;
  overflow: hidden;
`;
