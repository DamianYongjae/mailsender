import React from "react";
import styled from "styled-components";

const Container = styled.input`
  border: 1px solid rgb(167 184 199);
  border-radius: 4px;
  height: 35px;
  width: 70%;
  font-size: 12px;
  padding: 0px 15px;
  &: focus {
    outline: none;
  }
  &::placeholder {
    font-family: "Nanum Pen Script", cursive;
    font-size: 15px;
  }
  &::-ms-input-placeholder {
    font-family: "Nanum Pen Script", cursive;
    font-size: 15px;
  }
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
