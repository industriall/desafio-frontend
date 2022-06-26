import React, { useEffect, useState } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
import { format, parseISO } from "date-fns";
import api from "../../services/api";
import { Link } from "react-router-dom";
import {
  Container,
  LoadingContainer,
  FormHeader,
  Content,
  HeaderTitle,
  Form,
  FormContent,
  AtaContainer,
  Card,
  Title,
  Button,
} from "./styles";
import Eye from "../../assets/eye.svg";
import Trash from "../../assets/trash.svg";
import Plus from "../../assets/plus.svg";
import { AtaDetailsModal } from "../AtaDetailsModal";

interface MeetProps {
  id: number;
  titulo: string;
  dataInicio: string;
  dataFim: string;
  tipoReuniao: string;
  local: string;
  // camposAtaReuniao: AtaReuniaoProps[];
}

export function MeetingForm() {
  const [isAtaDetailsModalOpen, setIsAtaDetailsModalOpen] = useState(false);
  const [meetData, setMeetData] = useState<MeetProps[]>([]);
  const [id, setId] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const meetReverse = meetData.reverse();

  const meet = meetReverse.map((meet) => meet);

  const okrs = meet.filter(
    (meet) =>
      meet.tipoReuniao == "Acompanhamento de OKRs (Objectives and Key Results)"
  );

  const scrum = meet.filter((meet) => meet.tipoReuniao == "Daily Scrum");

  const sprint = meet.filter(
    (meet) => meet.tipoReuniao == "Sprint Retrospective"
  );

  const resumida = meet.filter((meet) => meet.tipoReuniao == "Resumida");

  function handleOpenAtaDetailsModal(item: MeetProps) {
    setId(item.id);
    setIsAtaDetailsModalOpen(true);
  }

  function handleCloseAtaDetailsModal() {
    setIsAtaDetailsModalOpen(false);
  }

  async function loadData() {
    try {
      setIsLoading(true);
      const response = await api.get("/Atas");
      setMeetData(response.data);
    } catch (error) {
      toast.error("Erro ao carregar atas");
    } finally {
      setIsLoading(false);
    }
  }

  async function handleDeleteMeet(id: number) {
    try {
      setIsLoading(true);
      const response = await api.delete(`/Atas/${id}`);

      const { message } = response.data;

      loadData();
      toast.success(message);
    } catch (error) {
      toast.error("Erro ao tentar excluir ata, contate o suporte");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    loadData();
  }, []);

  return (
    <Container>
      {isLoading == true ? (
        <LoadingContainer>
          <ReactLoading
            type={"spin"}
            color={"#4FC3F7"}
            height={"7%"}
            width={"7%"}
          />
        </LoadingContainer>
      ) : (
        <>
          <FormHeader>
            <Content>
              <HeaderTitle>
                <h1>Atas de Reunião</h1>
                <h2>Estas são as atas da últimas reuniões</h2>
              </HeaderTitle>

              <Link to="/register">
                <img src={Plus} />
                NOVA ATA
              </Link>
            </Content>
          </FormHeader>

          <Form>
            <AtaDetailsModal
              isOpen={!!isAtaDetailsModalOpen}
              onRequestClose={handleCloseAtaDetailsModal}
              id={id}
              ariaHideApp={false}
            />
            <FormContent>
              {okrs.length > 0 ? (
                <AtaContainer>
                  <h1>Acompanhamento de OKRs (Objectives and Key Results)</h1>
                  {okrs.map((meet) => (
                    <Card key={meet.id}>
                      <Title>
                        <h1>{meet.titulo}</h1>
                        <h2>
                          {format(
                            parseISO(meet.dataInicio),
                            "dd/MM/yyyy 'as' h'h':m', na'"
                          )}{" "}
                          {meet.local}
                        </h2>
                      </Title>

                      <Button>
                        <button
                          type="button"
                          onClick={() => {
                            handleOpenAtaDetailsModal(meet);
                          }}
                        >
                          <img src={Eye} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMeet(meet.id)}
                        >
                          <img src={Trash} />
                        </button>
                      </Button>
                    </Card>
                  ))}
                </AtaContainer>
              ) : null}

              {scrum.length > 0 ? (
                <AtaContainer>
                  <h1>Daily Scrum</h1>
                  {scrum.map((meet) => (
                    <Card key={meet.id}>
                      <Title>
                        <h1>{meet.titulo}</h1>
                        <h2>
                          {format(
                            parseISO(meet.dataInicio),
                            "dd/MM/yyyy 'as' h'h':m', na'"
                          )}{" "}
                          {meet.local}
                        </h2>
                      </Title>

                      <Button>
                        <button
                          type="button"
                          onClick={() => handleOpenAtaDetailsModal(meet)}
                        >
                          <img src={Eye} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMeet(meet.id)}
                        >
                          <img src={Trash} />
                        </button>
                      </Button>
                    </Card>
                  ))}
                </AtaContainer>
              ) : null}

              {resumida.length > 0 ? (
                <AtaContainer>
                  <h1>Resumida</h1>
                  {resumida.map((meet) => (
                    <Card key={meet.id}>
                      <Title>
                        <h1>{meet.titulo}</h1>
                        <h2>
                          {format(
                            parseISO(meet.dataInicio),
                            "dd/MM/yyyy 'as' h'h':m', na'"
                          )}{" "}
                          {meet.local}
                        </h2>
                      </Title>

                      <Button>
                        <button
                          type="button"
                          onClick={() => handleOpenAtaDetailsModal(meet)}
                        >
                          <img src={Eye} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMeet(meet.id)}
                        >
                          <img src={Trash} />
                        </button>
                      </Button>
                    </Card>
                  ))}
                </AtaContainer>
              ) : null}

              {sprint.length > 0 ? (
                <AtaContainer>
                  <h1>Sprint Retrospective</h1>
                  {sprint.map((meet) => (
                    <Card key={meet.id}>
                      <Title>
                        <h1>{meet.titulo}</h1>
                        <h2>
                          {format(
                            parseISO(meet.dataInicio),
                            "dd/MM/yyyy 'as' h'h':m', na'"
                          )}{" "}
                          {meet.local}
                        </h2>
                      </Title>

                      <Button>
                        <button
                          type="button"
                          onClick={() => handleOpenAtaDetailsModal(meet)}
                        >
                          <img src={Eye} />
                        </button>
                        <button
                          type="button"
                          onClick={() => handleDeleteMeet(meet.id)}
                        >
                          <img src={Trash} />
                        </button>
                      </Button>
                    </Card>
                  ))}
                </AtaContainer>
              ) : null}
            </FormContent>
          </Form>
        </>
      )}
    </Container>
  );
}
