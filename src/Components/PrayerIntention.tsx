import React from "react";
import styled from "styled-components";
import { EmailInput } from "../Util/Input";
import useInput from "../Hooks/useInput";
import { useHistory } from "react-router-dom";
import { fetchPost } from "../Util/Fetch";
import "../style.css";

const Container = styled.div`
  margin: auto;
  padding: 10px;
  max-height: 900px;
  min-width: 350px;
  max-width: 1000px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  font-family: "Nanum Pen Script", cursive;
`;

const ContentContainer = styled.div`
  padding-top: 10px;
  height: 100%;
  min-width: 300px;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 20px;
  font-size: 60px;
`;

const Instruction = styled.div`
  padding: 20px;
  display: flex;
  justify-content: center;
  font-size: 25px;
`;

const Label = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  margin-right: 10px;
`;

const EmailContainer = styled.div`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

const IntentionContainer = styled.div`
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 0;
`;

const IntentionInput = styled.textarea`
  border: 1px solid #49aaff;
  border-radius: 5px;
  width: 70%;
  font-size: 12px;
  padding: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 20px;
`;

const SendButton = styled.button`
  width: 30%;
  height: 30px;
  margin: auto;
  background-color: #49aae2;
  border: none;
  border-radius: 4px;
  &: hover {
    background-color: #49aaff;
    cursor: pointer;
    color: white;
  }
`;

export default () => {
  const history = useHistory();
  const email = useInput("");
  const intention = useInput("");

  function validateEmail(email: string) {
    const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const handleClick = async (
    email: string,
    subject: string,
    intention: string
  ) => {
    if (email === "" || intention === "") {
      alert("모든 항목을 입력해주세요");
    } else if (!validateEmail(email)) {
      alert("이메일 주소를 정확히 입력해주세요.");
    } else {
      const fetchOption = {
        endpoint: `sendmail`,
        data: {
          email,
          subject,
          intention,
        },
      };
      const result = await fetchPost(fetchOption);
      if (result.ok) {
        return history.push("/complete");
      }
    }
  };

  return (
    <Container>
      <ContentContainer>
        <Title>연수 지향</Title>
        <Instruction>
          요한 연수에 임하면서 주님께 청하는 지향을 입력하세요. 전송버튼은
          정해진 시간에 눌러주세요. 제출하신 지향 내용은 어디에도 저장되지
          않으며, 연수 후에 E-mail로 받으시게 되는데 못 받으신 분들은 Spam메일을
          확인해 주세요. 받으신 E-mail은 답변이 불가능하니 답장하지 마세요.
        </Instruction>
        <EmailContainer>
          <Label style={{ fontSize: 25 }}>Email:</Label>
          <EmailInput
            placeholder={"e-mail주소를 입력해주세요"}
            required={true}
            value={email.value}
            onChange={email.onChange}
            type="email"
          ></EmailInput>
        </EmailContainer>
        <IntentionContainer>
          <Label style={{ fontSize: 23 }}>지향:</Label>
          <IntentionInput
            placeholder={"지향을 입력해주세요"}
            required={true}
            value={intention.value}
            onChange={intention.onChange}
          ></IntentionInput>
        </IntentionContainer>
        <ButtonContainer>
          <SendButton
            style={{ fontFamily: '"Nanum Pen Script", cursive', fontSize: 22 }}
            onClick={() => {
              handleClick(
                email.value,
                "26차 요한 연수 지향",
                `기도지향 내용: <p>${intention.value}</p>`
              );
            }}
          >
            전송
          </SendButton>
        </ButtonContainer>
      </ContentContainer>
    </Container>
  );
};
