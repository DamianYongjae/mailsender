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
      <Contents>Home!</Contents>
    </Container>
  );
};
