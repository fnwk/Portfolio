import { useState } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Form = () => {
  const [status, setStatus] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const nameHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setName(e.target.value);
  const emailHandler = (e: React.ChangeEvent<HTMLInputElement>) =>
    setEmail(e.target.value);
  const messageHandler = (e: React.ChangeEvent<HTMLTextAreaElement>) =>
    setMessage(e.target.value);

  const submitHandler = async (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('click');

    if (name.trim() === '' || email.trim() === '' || message.trim() === '') {
      console.log('empty');
      setStatus(false);
      setStatusMessage('Please fill out all fields');
      return;
    }

    const req = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, message }),
    });
    const res = await req.json();

    if (res.message === 'Success') {
      setStatus(true);
      setStatusMessage('Message sent!');

      setName('');
      setEmail('');
      setMessage('');
    }
  };

  return (
    <StyledForm>
      <div className="user-info">
        <Input
          label="Your name"
          name="name"
          placeholder="Enter your name"
          value={name}
          inputHandler={nameHandler}
        />
        <Input
          label="Your email"
          name="email"
          placeholder="Enter your email"
          value={email}
          inputHandler={emailHandler}
        />
      </div>
      <Input
        type="textarea"
        label="Message"
        name="name"
        placeholder="Enter your name"
        className="message-input"
        value={message}
        textareaHandler={messageHandler}
      />
      <p className={`status ${status ? 'good' : 'bad'}`}>{statusMessage}</p>
      <button type="submit" onClick={submitHandler}>
        Send it
      </button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;

  .user-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 40px;

    div {
      width: 100%;
    }
  }

  .message-input {
    width: 100%;

    textarea {
      resize: none;
      height: 250px;
    }
  }

  .status {
    margin-block: 10px;
    font-size: 20px;

    &.good {
      color: ${({ theme }) => theme.colors.green};
    }

    &.bad {
      color: ${({ theme }) => theme.colors.red};
    }
  }

  button {
    width: 30%;
    border: none;
    background-color: ${({ theme }) => theme.colors.darkBlue};
    color: white;
    padding-block: 10px;
    font-weight: 500;
    font-size: 20px;
    border-radius: 10px;
    margin-left: auto;
    margin-top: 40px;
  }

  ${({ theme }) => theme.breakpoints.laptop} {
    width: 65%;

    .user-info {
      flex-direction: row;

      div {
        width: 45%;
      }
    }
  }
`;

export default Form;
