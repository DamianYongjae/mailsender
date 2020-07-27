import React from "react";
import styled from "styled-components";
import "../style.css";

const Footer = styled.footer`
  width: 100%;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div``;

const Subtitle = styled.div``;

export default () => {
  return (
    <Footer>
      <Title>카톨릭 성서모임</Title>
    </Footer>
  );
};
