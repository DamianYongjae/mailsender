import React from "react";
// import axios from "axios";

import styled from "styled-components";
import { EmailInput } from "../Util/Input";
import useInput from "../Hooks/useInput";
// import sgMail from "@sendgrid/mail";

import { useHistory } from "react-router-dom";
// import "../.env";
// import dotenv from "dotenv";
// import mail from "@sendgrid/mail";

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
  // dotenv.config();
  const history = useHistory();
  const email = useInput("");
  const intention = useInput("");

  function validateEmail(email: string) {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const fetchPost = async ({ endpoint, data } : any) => {
    return fetch(`https://mailsender-api.vercel.app/${endpoint}`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json"
      },
      credentials: 'include',
      mode: "cors",
    }).then((res) => {
      return res;
    });
  };

  // const mailSend = (address: string, subject: string, content:string) => {
  //   let date = Math.round(new Date("June 29, 2020 12:37:00").getTime() / 1000);
  //   let tempDate = Math.round(new Date().getTime() / 1000);
  //   const email = {
  //     from: "CBLM@CBLM.com",
  //     to: address,
  //     subject: subject,
  //     html: `기도 지향 내용: <p>${content}</p>`,
  //     send_at: tempDate,
  //   };
  //   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
  //   sgMail.send(email).then(
  //     () => {},
  //     (error) => {
  //       console.log(error);
  //       if (error.response) {
  //         console.log(error.response.body);
  //       }
  //     }
  //   );
  // };

  const handleClick = async (email: string, intention: string) => {
    // const data = { email, intention };
    if (email === "" || intention === "") {
      alert("모든 항목을 입력해주세요");
    } else if (!validateEmail(email)) {
      alert("이메일 주소를 정확히 입력해주세요.");
    } else {
      const fetchOption = {
        endpoint: `sendmail`,
        data: {
          email,
          intention
        }
      }
      const res = await fetchPost(fetchOption);

      if(res.ok){
        console.log("ok!");
        
      }
      history.push("/complete");
      // await axios;
      // .post(`https://mailsender-api.vercel.app/sendmail`, {
      // .post(`http://localhost:4000/sendmail`, {
      //   email,
      //   intention,
      // })
      // .then((res) => {
      //   history.push("/complete");
      // })
      // .catch((error) => {
      //   console.log(error);
      //   alert("something went wrong");
      // });
      // mailSend(email, "26차 요한연수 지향", intention);
    }
  };

  // const handleSubmit = async (email: string, intention: string) => {
  //   if (email === "" || intention === "") {
  //     alert("모든 항목을 입력해주세요");
  //   } else if (!validateEmail(email)) {
  //     alert("이메일 주소를 정확히 입력해주세요.");
  //   } else {
  //     await fetch(`https://mailsender-api.vercel.app/sendmail`, {
  //       method: "POST",
  //       body: JSON.stringify({ email, intention }),
  //       headers: {
  //         "Content-Type": "application/json, application/x-www-form-urlencoded",
  //       },
  //       mode: "cors",
  //     }).then((res) => console.log(res));
  //     history.push("/complete");
  //   }
  // };

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
            handleClick(email.value, intention.value);
          }}
        >
          전송
        </SendButton>
      </ButtonContainer>
    </Container>
  );
};
