import styled from "styled-components";

export const Container = styled.div`
  width: 920px;

  margin: 50px auto;
  padding: 20px;
  background-color: rgb(193, 164, 38);
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;
export const Title = styled.h1`
  margin: 0 0 10px;
  padding: 20px;
  border-radius: 10px;
  text-align: center;
  color: rgb(223, 224, 207);
  background-color: rgb(92, 182, 80);
`;
export const Header = styled(Title)`
  padding: 10px;
  font-size: 1.5em;
`;
export const Message = styled.p`
  padding: 10px;
  font-size: 1.5em;
  text-align: center;
`;
