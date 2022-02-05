import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 0 10px;
  padding: 10px;
  border-radius: 10px;
  background-color: rgba(152, 187, 132, 0.7);

  label {
    margin-right: 20px;
    text-align: center;
    font-weight: 700;
    font-size: 16px;
  }
  input {
    margin-left: 10px;
    padding: 5px;
    border-radius: 10px;
    font-size: 16px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }
  button {
    cursor: pointer;
    padding: 5px;
    border-radius: 10px;
    cursor: pointer;
    &:hover {
      background-color: rgb(13, 178, 228);
    }
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    font-size: 16px;
  }
`;
