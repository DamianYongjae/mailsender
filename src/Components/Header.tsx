import React from "react";
import styled from "styled-components";
import "../style.css";
const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const Title = styled.div`
  height: 30px;
  font-size: 24px;
`;

const Subtitle = styled.div`
  height: 20px;
  font-size: 16px;
`;

export default () => {
  return (
    <Header>
      <Title>제 27차 마르코 비대면 연수</Title>
      <Subtitle>말씀이 사람이 되시어 우리 가운데 사셨다. (요한 1:14)</Subtitle>
    </Header>
  );
};
