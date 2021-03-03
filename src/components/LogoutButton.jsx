import styled from "styled-components";

const ButtonContainer = styled.div`
  position: absolute;
  right: 30px;
  bottom: 30px;

  @media screen and (max-width: 573px) {
    top: 30px;
    right: 30px;
  }
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 10px 38px;
  border: 0;
  outline: 0;
  background-color: #3a2a50;
  color: #fff;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s linear;

  &:hover {
    background-color: #cabcdc;
    color: #3a2a50;
  }
`;

const LogoutButton = () => {
  return (
    <ButtonContainer>
      <Button>Logout</Button>
    </ButtonContainer>
  );
};

export default LogoutButton;
