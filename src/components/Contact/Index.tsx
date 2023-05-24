import styled from 'styled-components';
import Form from './Form';

const Contact = () => {
  return (
    <Container>
      <div className="text-container">
        <h1>
          Get in <span>touch !</span>
        </h1>
        <p>Feel free to get in touch in anytime. </p>
        <p>You can also reach me via filip@wnek.cc</p>
      </div>
      <Form />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.darkerBlue};};
  padding-inline: 7.7vw;
  margin-top: 30vh;
  width: 100vw;

  .text-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
    text-align: center;

    h1 {
      font-size: 25px;
      margin-bottom: 30px;

      span {
        font-family: 'Arsenica Medium Italic', serif;
        color: ${({ theme }) => theme.colors.darkBlue};
      }
    }
    
    p {
      font-size: 20px;
    }
  }

  ${({ theme }) => theme.breakpoints.laptop} {
    flex-direction: row;

    .text-container {
      text-align: left;
      margin-bottom: 0;

      h1 {
        font-size: 50px;
      }
    }
  }
`;

export default Contact;
