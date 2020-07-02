import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 1px solid;
  border-radius: 5px;
  height: 35px;
  width: 60%;
  font-size: 15px;
  padding: 0px 15px;
`;

type props = {
  placeholder: string;
  required: boolean;
  value: string;
  onChange: any;
  type: string;
};

export const EmailInput = ({
  placeholder,
  required = true,
  value,
  onChange,
  type = "email",
}: any) => (
  <Container
    placeholder={placeholder}
    required={required}
    value={value}
    onChange={onChange}
    type={type}
  ></Container>
);
