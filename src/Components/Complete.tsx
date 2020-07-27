import React from "react";
import styled from "styled-components";
import "../style.css";

const Container = styled.div`
  margin: auto;
  width: 60%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Contents = styled.div`
  margin-top: 10px;
  height: 1000px;
  width: 800px;
  background: url(https://prismagramdamian.s3.us-east-2.amazonaws.com/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B32.jpg);
  background-size: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Text = styled.div`
  padding-top: 150px;
  font-family: "Nanum Pen Script", cursive;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 53px;
`;

export default () => {
  return (
    <Container>
      <Contents>
        <Text>
          <span>제출하셨습니다.</span>
          <span> 연수가 끝난 후에</span>
          <span>Email로 받으실 수 있습니다.</span>
          <br></br>
          <span>창을 닫아주세요.</span>
        </Text>
      </Contents>
    </Container>
  );
};
