import React from "react";

import { Container } from "./styles";
import { Header } from "../Header";
import { MeetingForm } from "../MeetingForm";

export function Dashboard() {
  return (
    <Container>
      <Header />
      <MeetingForm />
    </Container>
  );
}
