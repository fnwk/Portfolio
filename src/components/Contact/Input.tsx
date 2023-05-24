import styled from 'styled-components';

interface Props {
  label: string;
  type?: string;
  name: string;
  placeholder: string;
  className?: string;
  value?: string;
  inputHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  textareaHandler?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const Input = ({
  label,
  type,
  name,
  placeholder,
  className,
  value,
  inputHandler,
  textareaHandler,
}: Props) => (
  <Container className={className}>
    <label htmlFor={name}>{label}</label>
    {type === 'textarea' ? (
      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={textareaHandler}
      />
    ) : (
      <input
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={inputHandler}
      />
    )}
  </Container>
);
const Container = styled.div`
  display: flex;
  width: 45%;
  flex-direction: column;
  font-size: 20px;

  label {
    margin-bottom: 10px;
  }

  input,
  textarea {
    background-color: ${({ theme }) => theme.colors.lightGrey};
    border: none;
    padding: 10px 10px;
    font-size: 20px;
    border-radius: 10px;
    outline: none;
  }
`;

export default Input;
