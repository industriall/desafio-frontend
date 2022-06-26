import styled from "styled-components";

export const Container = styled.form`
  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
`;

export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  h1 {
    font-family: "Calibri";
    font-weight: 700;
    font-size: 20px;
    color: var(--blue-dark);
  }

  h2 {
    font-family: "Calibri";
    font-weight: 400;
    font-size: 16px;
    color: var(--gray-dark);
    margin-top: 14px;
  }
`;

export const MeetContent = styled.div``;
