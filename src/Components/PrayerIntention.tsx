import React from "react";
// import axios from "axios";

import styled from "styled-components";
import { EmailInput } from "../Util/Input";
import useInput from "../Hooks/useInput";

import { useHistory } from "react-router-dom";

const Container = styled.div`
  margin: auto;
  width: 60%;
  height: 80vh;
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  border: 1px solid blue;
  border-radius: 4px;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 40px;
`;

const Instruction = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  flex-direction: column;
  padding: 30px 50px;
`;

const Label = styled.div`
  display: flex;
  align-item: center;
  justify-content: center;
  height: 40px;
  margin-right: 30px;
`;

const EmailContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 30px;
`;

const IntentionContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 30px;
`;

const IntentionInput = styled.textarea`
  border: 1px solid;
  border-radius: 5px;
  height: 100px;
  width: 60%;
  font-size: 12px;
  padding: 15px;
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 30px;
`;

const SendButton = styled.button`
  width: 300px;
  height: 40px;
  margin: auto;
`;

export default () => {
  const history = useHistory();
  const email = useInput("");
  const intention = useInput("");

  function validateEmail(email: string) {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // const handleClick = async (email: string, intention: string) => {
  //   if (email === "" || intention === "") {
  //     alert("모든 항목을 입력해주세요");
  //   } else if (!validateEmail(email)) {
  //     alert("이메일 주소를 정확히 입력해주세요.");
  //   } else {
  //     await axios.post(`https://mailsender-api.vercel.app/sendmail`, {
  //       email,
  //       intention,
  //     }, {
  //       headers: {
  //         "Content-Type": "application/json;charset=UTF-8",
  //         "Access-Control-Allow-Origin": "*",
  //         "Access-Control-Allow-Headers":
  //           "Origin, X-Requested-With, Content-Type, Accept",
  //       },
  //     }).catch((err) => {
  //       console.log(`error: ${err}`);
  //     });
  //   }
  // };

  const handleSubmit = async (email: string, intention: string) => {
    if (email === "" || intention === "") {
      alert("모든 항목을 입력해주세요");
    } else if (!validateEmail(email)) {
      alert("이메일 주소를 정확히 입력해주세요.");
    } else {
      return fetch(`https://mailsender-api.vercel.app/sendmail`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }).then((res) => {
        return res;
      }).catch((err) => {
        console.log(`erro: ${err}`);
      });
    }
  };

  return (
    <Container>
      <Title>연수 지향</Title>
      <Instruction>
        요한 연수에 임하면서 주님께 청하는 지향을 입력하세요. 전송버튼은 정해진 시간에 눌러주세요. 연수 후에 E-mail로 받으시게
        되는데 못 받으신 분들은 Spam메일을 확인해 주세요.
      </Instruction>
      <EmailContainer>
        <Label>Email:</Label>
        <EmailInput
          placeholder={"e-mail주소를 입력해주세요"}
          required={true}
          value={email.value}
          onChange={email.onChange}
          type="email"
        >
        </EmailInput>
      </EmailContainer>
      <IntentionContainer>
        <Label>지향:</Label>
        <IntentionInput
          placeholder={"지향을 입력해주세요"}
          required={true}
          value={intention.value}
          onChange={intention.onChange}
        >
        </IntentionInput>
      </IntentionContainer>
      <ButtonContainer>
        <SendButton
          onClick={() => {
            handleSubmit(email.value, intention.value);
            history.push("/complete");
          }}
        >
          전송
        </SendButton>
      </ButtonContainer>
    </Container>
  );
};
