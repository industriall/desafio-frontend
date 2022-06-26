import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
`;

export const HeaderTitle = styled.div`
  h1 {
    font-family: "Calibri";
    font-weight: 700;
    font-size: 24px;
    color: var(--blue-dark);
  }

  h2 {
    font-family: "Calibri";
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
  width: 100%;
  height: 100%;
`;

export const FormContent = styled.div`
  background: var(--form-background);
  width: 946px;
  height: 100%;

  display: flex;
  flex: 0 1;
  flex-direction: column;

  box-shadow: 0px 4px 15px 1px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-bottom: 20px;
`;

export const Identifier = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 880px;
  height: 309px;

  margin: 29px 33px 0 33px;

  position: relative;
  margin-bottom: 41px;

  h1 {
    width: 109px;
    height: 24px;
    color: var(--gray-medium);
    font-family: "Calibri";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
  }
`;

export const ContainerInputSelect = styled.div`
  position: relative;
  padding-top: 17.5px;
  margin-top: 17.5px;

  select {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background: var(--form-background);
    border: 1px solid var(--gray-light);
    color: var(--black);
    border-radius: 4px;
    outline: none;
    padding: 0 15px;
    width: 100%;
    height: 40px;

    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;

    &:focus {
      border: 2px solid var(--blue-light);
    }
    ::placeholder {
      color: transparent;
    }

    option {
      background: var(--form-background);
    }
  }

  label {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-medium);
    pointer-events: none;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: var(--form-background);
    padding: 5px;
    box-sizing: border-box;
  }

  select:focus + label,
  select:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: var(--blue-light);
  }
`;

export const ContainerInput = styled.div`
  position: relative;
  padding-top: 17.5px;
  margin-top: 17.5px;

  input {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    background: var(--form-background);
    border: 1px solid var(--gray-light);
    color: var(--black);
    border-radius: 4px;
    outline: none;
    padding: 0 15px;
    width: 100%;
    height: 40px;

    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;

    &:focus {
      border: 2px solid var(--blue-light);
    }
    ::placeholder {
      color: transparent;
    }
  }

  label {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-medium);
    pointer-events: none;
    position: absolute;
    top: calc(50% - 7px);
    left: 15px;
    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    background-color: var(--form-background);
    padding: 5px;
    box-sizing: border-box;
  }

  input:focus + label,
  input:not(:placeholder-shown) + label {
    font-size: 13px;
    top: 0;
    color: var(--blue-light);
  }
`;

export const DateInputs = styled.div`
  display: flex;
  justify-content: space-between;
  input {
    width: 425px;
  }
`;

export const MeetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 880px;
  height: 100%;
  margin-left: 33px;
  margin-right: 33px;

  h1 {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 24px;
    letter-spacing: 0.01em;
    color: var(--gray-medium);
  }
`;

export const MeetSubtitleContainer = styled.div`
  height: 85px;
  width: 880px;

  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;

  margin-bottom: 222px;
`;

export const MeetSubtitle = styled.div`
  /* margin: 77px 0 30px 150px; */
  width: 880px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: "Calibri";
    font-style: italic;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: var(--gray-medium);
  }
`;

export const MeetContent = styled.div`
  height: 100%;
`;

export const MeetInputContainer = styled.div`
  height: 100%;
  margin-top: 20px;
  h1 {
    font-family: "Calibri";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    padding-left: 14px;
  }

  textarea {
    background: var(--form-background);
    border: 1px solid var(--gray-light);
    border-radius: 5px;
    box-sizing: border-box;
    width: 100%;
    height: 196px;
    left: 0px;
    top: 30px;
    outline: none;
    margin-top: 10px;

    transition: all 0.1s linear;
    -webkit-transition: all 0.1s linear;
    -moz-transition: all 0.1s linear;
    -webkit-appearance: none;

    &:focus {
      border: 2px solid var(--blue-light);
    }
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 41px;
  margin-right: 33px;
  margin-bottom: 29px;
  width: 100%auto;
  height: 38px;
`;

export const ButtonContent = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;

  a[type="button"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Calibri";
    font-weight: 700;
    font-size: 16px;
    color: var(--gray-dark);
    width: 116px;
    height: 38px;
    background: var(--gray-light);
    border-radius: 5px;
    border: none;
    text-decoration: none;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.8);
    }
  }

  a[type="submit"] {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Calibri";
    font-weight: 700;
    font-size: 16px;
    color: var(--gray-lightest);
    width: 125px;
    height: 38px;
    background: var(--green);
    border-radius: 5px;
    border: none;
    text-decoration: none;

    transition: filter 0.4s;

    &:hover {
      filter: brightness(0.8);
    }
  }
`;
