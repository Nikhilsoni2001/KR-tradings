import React, { useState } from "react";
import styled from "styled-components";
import emailjs from "emailjs-com";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "kr-service", e.target, "user_YTKN6vbsMYfkpTy9Pqcv7")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <Container>
      <LeftContainer onSubmit={sendEmail}>
        <SubHeading>say hi to our team</SubHeading>
        <Heading>Contact Us</Heading>
        <InputContainer>
          <Paragraph>
            Feel free to contact us and we will get back to you as soon as we
            can.
          </Paragraph>
          <Input
            placeholder="name"
            type="text"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="email address"
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            placeholder="tell us all about it"
            type="text"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <SendButton type="submit">Send</SendButton>
        </InputContainer>
      </LeftContainer>
      <RightContainer>
        <Section>
          <SectionTitle>opening hours</SectionTitle>
          <SectionDescription>Monday - Friday</SectionDescription>
          <SectionDescription>9am - 5pm</SectionDescription>
          <SectionDescription>Weekend closed.</SectionDescription>
        </Section>

        <Section>
          <SectionTitle>address</SectionTitle>
          <SectionDescription>Jln. Letjend Suparman 51</SectionDescription>
          <SectionDescription>Kediri, Jawa Timur 64133</SectionDescription>
          <SectionDescription>Indonesia</SectionDescription>
        </Section>

        <Section>
          <SectionTitle>support</SectionTitle>
          <SectionDescription>contact.krtradings@gmail.com</SectionDescription>
          <SectionDescription>+91-8666666666</SectionDescription>
        </Section>
      </RightContainer>
    </Container>
  );
};

export default Contact;

const Container = styled.div`
  height: 85vh;
  margin-top: 100px;
  display: flex;
  background: #f8f8f8;
`;

const LeftContainer = styled.form`
  padding: 10px;
  margin: 10px 100px;
`;
const RightContainer = styled.div`
  padding: 10px;
  margin: 10px 30px;
`;
const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 200px;
`;

const Heading = styled.h1`
  font-size: 4rem;
  margin: 10px 100px;
  color: #3f51b5;
`;

const Paragraph = styled.p`
  width: 300px;
  font-size: 0.9rem;
  margin: 20px 0;
`;
const SubHeading = styled(Paragraph)`
  margin: 10px 100px;
`;
const Input = styled.input`
  margin: 10px 0;
  height: 35px;
  border: none;
  border-radius: 4px;
  outline: none;
  padding: 5px;
`;
const SendButton = styled.button`
  margin: 10px 0;
  height: 40px;
  background: #3f51b5;
  outline: none;
  border: none;
  border-radius: 6px;
  color: white;
  cursor: pointer;

  :hover {
    color: #3f51b5;
    background-color: #f5f5f5;
    transition: all 1s;
  }
`;

const Section = styled.div`
  margin-bottom: 50px;
`;
const SectionTitle = styled(Paragraph)`
  margin: 8px 0;
  color: #3f51b5;
  font-size: 1rem;
`;
const SectionDescription = styled(Paragraph)`
  margin: 10px 0;
`;
