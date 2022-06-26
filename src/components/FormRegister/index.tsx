import React, { useState, FormEvent, useEffect } from "react";
import ReactLoading from "react-loading";
import { toast } from "react-toastify";
// import { Editor } from "react-draft-wysiwyg";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";

import {
  Container,
  LoadingContainer,
  FormHeader,
  Content,
  HeaderTitle,
  Form,
  FormContent,
  Identifier,
  ContainerInput,
  ContainerInputSelect,
  DateInputs,
  MeetContainer,
  MeetContent,
  MeetSubtitleContainer,
  MeetSubtitle,
  MeetInputContainer,
  Button,
  ButtonContent,
} from "./styles";
import { Header } from "../Header";

interface FormProps {
  titulo: string;
  dataInicio: String;
  dataFim: String;
  tipoReuniaoId: String;
  localId: String;
  camposAtaReuniao: AtaReuniaoProps[];
}

interface AtaReuniaoProps {
  campoId: String;
  valor: string;
}

interface SelectType {
  id: number;
  nome: string;
}

export function FormRegister() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [form, setForm] = useState<FormProps[]>([]);
  const [meetType, setMeetType] = useState<SelectType[]>([]);
  const [placeType, setPlaceType] = useState<SelectType[]>([]);

  const [title, setTitle] = useState("");
  const [place, setPlace] = useState("");
  const [firstDate, setFirstDate] = useState("");
  const [finalDate, setFinalDate] = useState("");
  const [ataType, setAtaType] = useState("0");

  const [textArea, setTextArea] = useState("");
  const [textAreaTomorrow, setTextAreaTomorrow] = useState("");
  const [endSprint, setEndSprint] = useState("");
  const [startOfQuarter, setStartOfQuarter] = useState("");
  const [quarterObjective, setQuarterObjective] = useState("");

  async function handleSubmit(e: FormEvent) {
    setIsLoading(true);
    e.preventDefault();

    try {
      if (
        title == "" ||
        place == "" ||
        firstDate == "" ||
        finalDate == "" ||
        ataType == "0"
      ) {
        toast.warn("Por favor, preencha todos os campos obrigatórios");
        return;
      }

      let aux = [] as any;

      console.log(ataType);
      console.log(textArea, "text");
      console.log(textArea == "");

      if (ataType === "1") {
        if (textArea == "") {
          toast.warn("Por favor, preencha os campos obrigatórios");
          return;
        } else {
          aux = [
            {
              campoId: 1,
              valor: textArea,
            },
          ];
        }
      }
      if (ataType === "2") {
        if (textAreaTomorrow === "" || textArea == "") {
          toast.warn("Por favor, preencha os campos obrigatórios");
          return;
        } else {
          aux = [
            {
              campoId: 2,
              valor: textArea,
            },
            {
              campoId: 3,
              valor: textAreaTomorrow,
            },
          ];
        }
      }
      if (ataType === "3") {
        if (textArea === "" || endSprint === "") {
          toast.warn("Por favor, preencha os campos obrigatórios");
          return;
        } else {
        }
      }

      if (ataType === "4") {
        if (startOfQuarter === "" || quarterObjective === "") {
          toast.warn("Por favor, preencha os campos obrigatórios");
          return;
        } else {
          aux = [
            {
              campoId: 7,
              valor: startOfQuarter,
            },
            {
              campoId: 8,
              valor: quarterObjective,
            },
            {
              campoId: 9,
              valor: textArea,
            },
          ];
        }
      }

      const response = await api.post("/Atas", {
        titulo: title,
        dataInicio: firstDate,
        dataFim: finalDate,
        tipoReuniaoId: ataType,
        localId: place,
        camposAtaReuniao: aux,
      });

      const { message } = response.data;

      navigate("/");

      toast.success(message);
    } catch (error) {
      console.log(error);
      toast.error("Erro ao cadastrar ata, favor contatar o suporte");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    async function loadMeetType() {
      api
        .get("/TiposReuniao", {})
        .then((res) => {
          setMeetType(res.data);
        })
        .catch((error) => {
          console.error(error, "error");
        });
    }

    async function loadPlaceType() {
      api
        .get("/Locais", {})
        .then((res) => {
          setPlaceType(res.data);
        })
        .catch((error) => {
          console.error(error, "error");
        });
    }

    loadPlaceType();
    loadMeetType();
  }, []);

  return (
    <Container>
      {isLoading === true ? (
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
          <Header />
          <FormHeader>
            <Content>
              <HeaderTitle>
                <h1>Nova Ata de Reunião</h1>
                <h2>
                  Os campos obrigatórios estão marcados com um asterisco (*)
                </h2>
              </HeaderTitle>
            </Content>
          </FormHeader>

          <Form>
            <FormContent>
              <Identifier>
                <h1>Identificação</h1>

                <ContainerInput>
                  <input
                    type="title"
                    placeholder=" "
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <label>Título *</label>
                </ContainerInput>

                <ContainerInputSelect>
                  <select
                    className="selectpicker"
                    id="selectstates"
                    value={place}
                    onChange={(e) => {
                      setPlace(e.target.value);
                    }}
                  >
                    <option value="0">Selecione</option>
                    {Object.values(placeType).map((item) => (
                      <option data-hidden="true" value={item.id} key={item.id}>
                        {item.nome}
                      </option>
                    ))}
                  </select>
                  <label>Local *</label>
                </ContainerInputSelect>

                <DateInputs>
                  <ContainerInput>
                    <input
                      type="datetime-local"
                      placeholder=" "
                      value={firstDate}
                      onChange={(e) => setFirstDate(e.target.value)}
                    />
                    <label>Data e Horário de Início *</label>
                  </ContainerInput>

                  <ContainerInput>
                    <input
                      type="datetime-local"
                      placeholder=" "
                      value={finalDate}
                      onChange={(e) => setFinalDate(e.target.value)}
                    />
                    <label>Data e Horário de Fim</label>
                  </ContainerInput>
                </DateInputs>

                <ContainerInputSelect>
                  <select
                    className="selectpicker"
                    id="selectstates"
                    value={ataType}
                    onChange={(e) => {
                      setAtaType(e.target.value);
                    }}
                  >
                    <option value="0">Selecione</option>
                    {Object.values(meetType).map((item) => (
                      <option data-hidden="true" value={item.id} key={item.id}>
                        {item.nome}
                      </option>
                    ))}
                  </select>
                  <label>Título de Reunião *</label>
                </ContainerInputSelect>
              </Identifier>

              <MeetContainer>
                <h1>Conteúdo da Reunião</h1>

                {ataType == "0" && (
                  <MeetSubtitleContainer>
                    <MeetSubtitle>
                      <h1>Selecione o Tipo de Reunião</h1>
                    </MeetSubtitle>
                  </MeetSubtitleContainer>
                )}
                {ataType === "1" && (
                  <MeetInputContainer>
                    <h1>Descrição dos Ocorridos *</h1>
                    <textarea
                      value={textArea}
                      onChange={(e) => setTextArea(e.target.value)}
                    />
                  </MeetInputContainer>
                )}

                {ataType === "2" && (
                  <MeetContent>
                    <MeetInputContainer>
                      <h1>O que foi feito hoje? *</h1>
                      <textarea
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                      />
                    </MeetInputContainer>

                    <MeetInputContainer>
                      <h1>O que será feito amanhã? *</h1>
                      <textarea
                        value={textAreaTomorrow}
                        onChange={(e) => setTextAreaTomorrow(e.target.value)}
                      />
                    </MeetInputContainer>
                  </MeetContent>
                )}

                {ataType === "3" && (
                  <MeetContent>
                    <DateInputs>
                      <ContainerInput>
                        <input
                          type="date"
                          placeholder=" "
                          value={endSprint}
                          onChange={(e) => setEndSprint(e.target.value)}
                        />
                        <label>Data de Fim da Sprint *</label>
                      </ContainerInput>
                    </DateInputs>

                    <MeetInputContainer>
                      <h1>Avaliação da Sprint *</h1>
                      <textarea
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                      />
                    </MeetInputContainer>
                  </MeetContent>
                )}

                {ataType === "4" && (
                  <MeetContent>
                    <DateInputs>
                      <ContainerInput>
                        <input
                          type="date"
                          placeholder=" "
                          value={startOfQuarter}
                          onChange={(e) => setStartOfQuarter(e.target.value)}
                        />
                        <label>Data de Início do Trimestre *</label>
                      </ContainerInput>
                    </DateInputs>

                    <ContainerInput>
                      <input
                        placeholder=" "
                        value={quarterObjective}
                        onChange={(e) => setQuarterObjective(e.target.value)}
                      />
                      <label>Objetivo Principal do Trimestre *</label>
                    </ContainerInput>

                    <MeetInputContainer>
                      {/* <Editor /> */}
                      <h1>Resultados Obtidos Durante os Meses</h1>
                      <textarea
                        value={textArea}
                        onChange={(e) => setTextArea(e.target.value)}
                      />
                    </MeetInputContainer>
                  </MeetContent>
                )}
              </MeetContainer>
              <Button>
                <ButtonContent>
                  <Link type="button" to="/">
                    CANCELAR
                  </Link>
                  <Link type="submit" to="/" onClick={handleSubmit}>
                    SALVAR ATA
                  </Link>
                </ButtonContent>
              </Button>
            </FormContent>
          </Form>
        </>
      )}
    </Container>
  );
}
