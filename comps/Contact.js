import styled from "styled-components";

import { useState } from "react";

import emailjs from "emailjs-com";

const FormUI = styled.form`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  justify-content: space-between;
`;

const InputContainer = styled.div`
  width: 100%;
  margin: 0 0 100px 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const InputLabel = styled.div`
  -webkit-text-stroke: 1px black;
  font-size: calc(48px + 3vw);
  color: transparent;
`;

const EmojiUI = styled.div`
  animation: shake 0s infinite ease;
`;

const InputUI = styled.input`
  border: none;
  font-family: sofia-pro, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  border-bottom: 1px solid black;
  width: 50%;
  font-size: calc(32px + 1.5vw);
  background: none;
  border: none;
  outline: none;
  border-bottom: 1px solid black;
  -webkit-appearance: none;
  border-radius: 0;

  &:focus {
    outline: none;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const SubmitUI = styled.button`
  border: none;
  font-family: sofia-pro, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu,
    Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  margin: 50px 0 0 0;
  width: 50%;
  font-size: calc(36px + 1.5vw);
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
  color: white;
  height: 150px;
  cursor: pointer;
  transition: 0.1s ease;

  background: rgba(220, 220, 220, 0.55);
  backdrop-filter: blur(0px);
  -webkit-backdrop-filter: blur(0px);
  box-shadow: 0px 0px 0px rgba(0, 0, 0, 0.25);

  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.18);

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
    ${EmojiUI} {
      animation: shake 0.2s infinite ease;
    }
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
`;

const RowUI = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const MessageSentUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: fixed;
  top: 0;
  z-index: 1000;
`;

const MessageTextUI = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  max-width: 400px;
  width: 50%;
  background-color: white;
  z-index: 10000;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  background: black;
  color: white;
`;

export const ContactForm = ({}) => {
  const [hovered, setHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [wasSent, setWasSent] = useState("");
  const [showMessage, setShowMessage] = useState("");

  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const sendEmail = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      window.scrollTo(0, 0);

      emailjs
        .sendForm(
          "service_ccbzzua",
          "template_8iszzkr",
          e.target,
          "user_JhDMiRQCsoHKE2pRMkxeJ"
        )
        .then(
          (result) => {
            console.log(result.text);
            setWasSent("Your message was sent!");
            setShowMessage(true);
            setTimeout(() => {
              setShowMessage(false);
            }, 1000);
          },
          (error) => {
            console.log(error.text);
          }
        );
    } else {
      setShowMessage(true);
      setWasSent("Enter an email to blast off!");
      setTimeout(() => {
        setShowMessage(false);
      }, 1000);
    }
  };

  return (
    <>
      {showMessage ? (
        <MessageSentUI>
          <MessageTextUI>{wasSent}</MessageTextUI>
        </MessageSentUI>
      ) : (
        <></>
      )}
      <FormUI onSubmit={sendEmail}>
        <InputContainer>
          <InputLabel>Your Name:</InputLabel>
          <InputUI type="text" name="user_name" />
        </InputContainer>

        <InputContainer>
          <InputLabel>Email:</InputLabel>
          <InputUI
            type="email"
            name="user_email"
            text={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </InputContainer>

        <InputContainer>
          <InputLabel>Message:</InputLabel>
          <InputUI name="message" />
        </InputContainer>

        <RowUI>
          <SubmitUI
            onMouseEnter={() => setHovered(!hovered)}
            onMouseLeave={() => setHovered(!hovered)}
            type="submit"
            value="send"
          >
            <EmojiUI className="emoji">🚀</EmojiUI>
          </SubmitUI>
        </RowUI>
      </FormUI>
    </>
  );
};
