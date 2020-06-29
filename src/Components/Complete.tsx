import React from "react";
import styled from "styled-components";

const Container = styled.div`
  margin: auto;
  width: 60%;
  height: 70vh;
  display: flex;
  justify-content: center;
  align-item: center;
`;

const Contents = styled.div`
  height: 200px;
`;

export default () => {
  return (
    <Container>
      <Contents>
        <h1>제출하셨습니다.</h1>
        <h2> 연수가 끝난 후에 메일로 받으시겠습니다.</h2>
        <h2>창을 닫아주세요.</h2>
      </Contents>
    </Container>
  );
};
