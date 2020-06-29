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

const Contents = styled.div``;

export default () => {
  return (
    <Container>
      <Contents>
        제출하셨습니다. 연수가 끝난 후에 메일로 받으시겠습니다.
      </Contents>
    </Container>
  );
};
