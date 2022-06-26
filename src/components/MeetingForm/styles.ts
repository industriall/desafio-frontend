import styled from "styled-components";

export const Container = styled.div`
  background: var(--gray-lightest);
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  justify-content: center;
  align-items: center;
`;

export const FormHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 32px;
`;

export const Content = styled.div`
  width: 881px;
  height: 65px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    background-color: var(--blue-light);
    color: var(--black);
    font-family: "Open sans";
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    text-decoration: none;

    width: 118px;
    height: 33px;
    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;

export const HeaderTitle = styled.div`
  h1 {
    font-family: "Open sans";
    font-weight: 700;
    font-size: 24px;
    color: var(--blue-dark);
  }

  h2 {
    font-family: "Open sans";
    font-weight: 400;
    font-size: 20px;
    color: var(--gray-dark);
    margin-top: 12px;
  }
`;

export const Form = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background);

  width: 100%;
  height: 100%;
`;

export const FormContent = styled.div`
  width: 946px;
  height: auto;
  background: var(--form-background);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const AtaContainer = styled.div`
  width: 100%;
  min-height: 34px;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 29px 31.5px 35px 31.5px;

  h1 {
    font-family: "Open sans";
    font-weight: 700;
    font-size: 20px;
    color: var(--blue-dark);
  }
`;
export const Card = styled.div`
  width: 100%;
  height: 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--gray-light);
`;
export const Title = styled.div`
  h1 {
    font-family: "Open sans";
    font-weight: 700;
    font-size: 16px;
    color: var(--black);
  }

  h2 {
    font-family: "Open sans";
    font-weight: 400;
    font-size: 14px;
    color: var(--gray-dark);
    margin-top: 14px;
  }
`;

export const Button = styled.div`
  border: 0;

  button {
    border: 0;
    color: var(--gray-dark);
    margin-right: 22px;
    background: transparent;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.3);
    }
  }
`;
