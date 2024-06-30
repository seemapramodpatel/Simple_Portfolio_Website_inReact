import React from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 4rem 2rem;
  background: #eaeaea;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Input = styled.input`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 1rem;
  background: #333;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background: #555;
  }
`;

const Contact = () => {
  return (
    <ContactSection id="contact">
      <h2>Contact Me</h2>
      <ContactForm>
        <Input type="text" placeholder="Name" required />
        <Input type="email" placeholder="Email" required />
        <TextArea placeholder="Message" rows="5" required />
        <Button type="submit">Send</Button>
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
