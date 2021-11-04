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
  font-size: calc(72px + 3vw);
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
  font-size: calc(72px + 3vw);
  background: none;
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
  transition: 0.3s ease;

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
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    ${EmojiUI} {
      animation: shake 0.2s infinite ease;
    }
  }
`;

export const ContactForm = ({}) => {
  const [hovered, setHovered] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
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
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const RowUI = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-end;
  `;

  return (
    <FormUI onSubmit={sendEmail}>
      <InputContainer>
        <InputLabel>Your Name:</InputLabel>
        <InputUI type="text" name="user_name" />
      </InputContainer>

      <InputContainer>
        <InputLabel>Email:</InputLabel>
        <InputUI type="email" name="user_email" />
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
  );
};
