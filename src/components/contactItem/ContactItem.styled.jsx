import styled from "styled-components";

export const ListItem = styled.li`
  margin: 5px;
  padding: 5px;
  position: relative;
  border-radius: 10px;
  &:hover {
    transform: scale(1.01);
  }
  &::marker {
    font-size: 1.5em;
    color: red;
  }
  background: linear-gradient(
    90deg,
    rgba(152, 187, 132, 0.7) 39%,
    rgba(132, 136, 187, 0.7) 40%,
    rgba(28, 166, 184, 0.7) 85%,
    #6987d9 86%
  );
`;
export const Name = styled.span`
  margin-left: 20px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

  font-size: 24px;
`;
export const Number = styled(Name)`
  position: absolute;
  left: 38%;
  color: rgb(216, 211, 204);
`;
export const Button = styled.button`
  position: absolute;
  right: 4%;
  padding: 5px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    color: rgb(223, 224, 207);
    transform: scale(1.1);
    background-color: rgba(0, 0, 255, 0.5);
  }
`;
