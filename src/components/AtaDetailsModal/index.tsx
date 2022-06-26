import { useState, useLayoutEffect } from "react";
import { format, parseISO } from "date-fns";
import Modal from "react-modal";
import api from "../../services/api";
import Close from "../../assets/close.svg";

import { Container, Content, MeetContent, LoadingContainer } from "./styles";
import { toast } from "react-toastify";
import ReactLoading from "react-loading";

interface FormProps {
  titulo: string;
  dataInicio: string;
  dataFim: string;
  tipoReuniao: string;
  local: string;
  id: number;
  camposAtaReuniao: AtaReuniaoProps[];
}

interface AtaReuniaoProps {
  campoId: String;
  valor: string;
  nome: string;
}

interface AtaDetailsModalProps {
  isOpen: boolean;
  id: number;
  onRequestClose: () => void;
  ariaHideApp?: boolean | undefined;
  appElement?:
    | HTMLElement
    | HTMLElement[]
    | HTMLCollection
    | NodeList
    | undefined;
}

export function AtaDetailsModal({
  isOpen,
  onRequestClose,
  id,
}: AtaDetailsModalProps) {
  const [ataReuniaoId, setAtaReuniaoId] = useState<FormProps[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function loadAtaId() {
    try {
      setIsLoading(true);
      const response = await api.get(`/Atas/${id}`);

      setAtaReuniaoId([response.data]);
    } catch (error) {
      toast.error("Erro ao carregar informações");
    } finally {
      setIsLoading(false);
    }
  }

  useLayoutEffect(() => {
    Modal.setAppElement("body");

    if (id != 0 || id == null || id == undefined) {
      loadAtaId();
    }
  }, [id]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
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
          <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
          >
            <img src={Close} />
          </button>
          <>
            {ataReuniaoId.length > 0
              ? ataReuniaoId.map((item) => (
                  <Container key={item.id}>
                    <Content key={item.id}>
                      <h1>Título</h1>
                      <h2>{item.titulo}</h2>
                    </Content>

                    <Content>
                      <h1>Local</h1>
                      <h2>{item.local}</h2>
                    </Content>

                    <Content>
                      <h1>Data e Hora de Início</h1>
                      <h2>
                        {format(
                          parseISO(item.dataInicio),
                          "dd/MM/yyyy 'as' h'h':m"
                        )}
                      </h2>
                    </Content>
                    <Content>
                      <h1>Data e Hora de Fim</h1>
                      <h2>
                        {format(
                          parseISO(item.dataFim),
                          "dd/MM/yyyy 'as' h'h':m"
                        )}
                      </h2>
                    </Content>
                    <Content>
                      <h1>Tipo de Reunião</h1>
                      <h2>{item.tipoReuniao}</h2>
                    </Content>

                    <MeetContent>
                      {item.camposAtaReuniao.map((ata) => (
                        <Content>
                          <h1>{ata.nome}</h1>
                          {ata.campoId == "7" || ata.campoId == "4" ? (
                            <h2>{format(parseISO(ata.valor), "dd/MM/yyyy")}</h2>
                          ) : (
                            <h2>{ata.valor}</h2>
                          )}
                        </Content>
                      ))}
                    </MeetContent>
                  </Container>
                ))
              : null}
          </>
        </>
      )}
    </Modal>
  );
}
