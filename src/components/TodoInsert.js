import styled from "styled-components";

export default function TodoInput({ onCreate, onChangeInput, onChangeEdit, input }) {
  const onSubmit = () => {
    if (input !== "") {
      onCreate(input);
      onChangeEdit(false);
    }
  };

  return (
    <Block>
      <input type="text" onChange={onChangeInput} value={input} />
      <button onClick={onSubmit}>입력</button>
    </Block>
  );
}

const Block = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  height: 50px;

  input {
    width: 100%;
    outline: none;
    border: 2px solid #ddd;
    font-size: 20px;
  }

  button {
    width: 20%;
    height: 26px;
    border: none;
    cursor: pointer;
    color: white;
    background-color: green;
  }
`;
