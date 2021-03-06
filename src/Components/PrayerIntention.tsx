import React from "react";
import styled from "styled-components";
import { EmailInput } from "../Util/Input";
import useInput from "../Hooks/useInput";
import { useHistory } from "react-router-dom";
import { fetchPost } from "../Util/Fetch";
import "../style.css";

const Container = styled.div`
  margin: auto;
  height: 100vh;
  font-family: "Nanum Pen Script", cursive;
`;

const ContentContainer = styled.div`
  margin: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background: url(https://prismagramdamian.s3.us-east-2.amazonaws.com/%E1%84%8C%E1%85%B5%E1%84%92%E1%85%A3%E1%86%BC%E1%84%8F%E1%85%A1%E1%84%83%E1%85%B31.jpg);
  background-size: 100% 100vh;
  background-repeat: no-repeat;
  background-position: center;
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 10px;
`;

const Instruction = styled.div`
  padding: 20px;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  line-height: 1.2;
  word-spacing: 5px;
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
  border: 1px solid rgb(167 184 199);
  border-radius: 4px;
  width: 74%;
  font-size: 12px;
  padding: 10px;
  resize: none;
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

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  padding: 20px;
  margin-top: 20px;
`;

const SendButton = styled.button`
  width: 30%;
  height: 30px;
  margin: auto;
  background-color: rgb(185 226 200);
  border: none;
  border-radius: 4px;
  color: #256b58;
  transition: all 0.3s ease;
  &: hover {
    background-color: rgb(86 230 139);
    cursor: pointer;
    color: #8d46c1;
    opacity: 0.7;
  }
  &: active {
    transform: translateX(1px) translateY(1px);
  }
  &: focus {
    outline: none;
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
    <>
      <Container className="pc-intention">
        <ContentContainer>
          <Title className="title-text">연수 지향</Title>
          <Instruction className="inst-text">
            <span>
              연수에 임하면서 주님께 청하는 지향을 입력해주세요.{" "}
            </span>
            <span>봉헌하기 버튼은 정해진 시간에 눌러주세요. </span>
            <span>제출하신 지향 내용은 연수 끝난 후에 </span>
            <span>E-mail로 받으시게 됩니다. </span>
            <span>못 받으신 분들은 Spam mail을 확인해 주세요. </span>
            <span>받으신 E-mail은 답변이 불가능하니 답장하지 마세요.</span>
          </Instruction>
          <Instruction className="inst-horizontal">
            <span>
              연수에 임하면서 주님께 청하는 지향을 입력해주세요.{" "}봉헌하기 버튼은 정해진 시간에 눌러주세요.
            </span>
            {/* <span>봉헌하기 버튼은 정해진 시간에 눌러주세요. </span> */}
            <span>
              제출하신 지향 내용은 연수 끝난 후에못 받으신 분들은 Spam mail을 확인해 주세요. 받으신 E-mail은 답변이
              불가능하니 답장하지 마세요.
              E-mail로 받으시게 됩니다.{" "}
            </span>
            {/* <span>
              
            </span> */}
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
              style={{
                fontFamily: '"Nanum Pen Script", cursive',
                fontSize: 22,
              }}
              onClick={() => {
                handleClick(
                  email.value,
                  "27차 마르코 연수 지향",
                  `기도지향 내용: <p>${intention.value}</p>`
                );
              }}
            >
              봉헌하기
            </SendButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
      <Container className="mobile-intention">
        <ContentContainer>
          <Title className="title-text">연수 지향</Title>
          <Instruction className="mobile-inst-text">
            <span>
              연수에 임하면서 주님께 청하는 지향을 입력해주세요.{" "}
            </span>
            <span>봉헌하기 버튼은 정해진 시간에 눌러주세요. </span>
            <span>제출하신 지향 내용은 연수 끝난 후에  </span>
            <span>E-mail로 받으시게 됩니다. </span>
            <span>못 받으신 분들은 Spam mail을 확인해 주세요. </span>
            <span>받으신 E-mail은 답변이 불가능하니 답장하지 마세요.</span>
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
              style={{
                fontFamily: '"Nanum Pen Script", cursive',
                fontSize: 22,
              }}
              onClick={() => {
                handleClick(
                  email.value,
                  "27차 마르코 연수 지향",
                  `기도지향 내용: <p>${intention.value}</p>`
                );
              }}
            >
              봉헌하기
            </SendButton>
          </ButtonContainer>
        </ContentContainer>
      </Container>
    </>
  );
};
