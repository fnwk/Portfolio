import styled from 'styled-components';
import Input from './Input';

const Form = () => {
  return (
    <StyledForm>
      <div className="user-info">
        <Input label="Your name" name="name" placeholder="Enter your name" />
        <Input label="Your email" name="email" placeholder="Enter your email" />
      </div>
      <Input
        type="textarea"
        label="Message"
        name="name"
        placeholder="Enter your name"
        className="message-input"
      />
      <button type="submit">Send it</button>
    </StyledForm>
  );
};

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 65%;

  .user-info {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 40px;
  }

  .message-input {
    width: 100%;

    textarea {
      resize: none;
      height: 250px;
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
`;

export default Form;
