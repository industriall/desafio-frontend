import styles from '../../styles/pages/NewAta.module.css';
import React from 'react';
import Head from 'next/head'
import { Header } from '../../components/Header'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { CardTextDailyScrum, CardTextResumida, CardTextSprint, CardTextAcompanhamento} from '../../components/CardText';
import { useRouter } from 'next/router';


export default function NewAta() {
  
  const [local, setLocal] = useState([]);
  const [tipoReuniao, setTipoReuniao] = useState(-1);
  const [tiposReuniao, setTiposReuniao] = useState([]);

  const handleChangeTipoReuniao = (event) => {
    // console.log(event.target.value)
    setTipoReuniao(event.target.value);
  }

  const [token, setToken] = useState('');
  const [auth, setAuth] = useState(false);



  useEffect(() => {
    async function handleLogin() {
      await fetch('https://desafio-iall.azurewebsites.net/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
  
        body: JSON.stringify({
          userName:'usuario5@teste.com',
          password:'555555'
        })
      })
      .then(res => res.json())
      .then(data => {
        setToken(data.token);
        setAuth(true);
        // console.log(data.token)
      }
      )
    }
    handleLogin();
  }, []);
   


  //USANDO API DA INDUSTRIALL
  useEffect(() => {
    //buscando os locais de reunião usando a API
    async function fetchData() {
      try{
        await fetch('https://desafio-iall.azurewebsites.net/api/Locais', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setLocal(data);
          }
        )
      }catch(err){
        console.log(err)
      }
    }
    fetchData();
  }, [auth]);

  useEffect(() => {
    //Buscando os tipos de reunião usando a API
    async function fetchDataTipos() {
      try{
        await fetch('https://desafio-iall.azurewebsites.net/api/TiposReuniao', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            setTiposReuniao(data);
          }
          )
      }catch(err){
        console.log(err)
      }
     
    }
    fetchDataTipos();
  
  }, [auth]);



  async function handleSave() {

    const tipo = document.getElementById('tipo').value;

    const data_1 ={
      titulo: document.getElementById('titulo')?.value,
      dataInicio: document.getElementById('dataInc')?.value,
      dataFim: document.getElementById('dataFim')?.value,
      tipoReuniaoID: parseInt(tipo),
      localID: parseInt(document.getElementById('local')?.value),
      camposAtaReuniao: [
          {
            campoId: 1,
            valor: document.getElementById('textResumida')?.value
          }
      ]
    }

    const data_2 ={
      titulo: document.getElementById('titulo')?.value,
      dataInicio: document.getElementById('dataInc')?.value,
      dataFim: document.getElementById('dataFim')?.value,
      tipoReuniaoID: parseInt(tipo),
      localID: parseInt(document.getElementById('local')?.value),
      camposAtaReuniao: [
          {
            campoId: 2,
            valor: document.getElementById('textDailyScrum-1')?.value
          },
          {
            campoId: 3,
            valor: document.getElementById('textDailyScrum-2')?.value
          }
      ]
    }
    const data_3 ={
      titulo: document.getElementById('titulo')?.value,
      dataInicio: document.getElementById('dataInc')?.value,
      dataFim: document.getElementById('dataFim')?.value,
      tipoReuniaoID: parseInt(tipo),
      localID: parseInt(document.getElementById('local')?.value),
      camposAtaReuniao: [
          {
            campoId: 4,
            valor: document.getElementById('sprintData')?.value
          },
          {
            campoId: 6,
            valor: document.getElementById('sprintText')?.value
          }
      ]
    }
    const data_4 ={
      titulo: document.getElementById('titulo')?.value,
      dataInicio: document.getElementById('dataInc')?.value,
      dataFim: document.getElementById('dataFim')?.value,
      tipoReuniaoID: parseInt(tipo),
      localID: parseInt(document.getElementById('local')?.value),
      camposAtaReuniao: [
          {
            campoId: 7,
            valor: document.getElementById('acData')?.value
          },
          {
            campoId: 8,
            valor: document.getElementById('acObjetivo')?.value
          },
          {
            campoId: 9,
            valor: document.getElementById('acText')?.value
          }
      ]
    }

    //verificar se os inputs estão preenchidos
    if(document.getElementById('titulo').value !== '' && document.getElementById('dataInc').value !== '' && document.getElementById('dataFim').value !== '' &&  document.getElementById('local').value !== '' && tipo!== ''){
      //POST para a API para criar a ata
      await fetch('https://desafio-iall.azurewebsites.net/api/Atas', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`,
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: //verificar tipo da reunião
        tipo === '1' ? JSON.stringify(data_1) :
        tipo === '2' ? JSON.stringify(data_2) :
        tipo === '3' ? JSON.stringify(data_3) :
        tipo === '4' ? JSON.stringify(data_4) :
        ''
      })
      .then(res => console.log(res))

    }


 
    
     
      
  }

  return (
    <>
      <Head>
        <title>Formulário da Ata</title>
      </Head>
      <Header/>
      <div className={styles.container}>
        <main className={styles.contents}>
          <form>

            <div className={styles.title}>
              <h1>Nova Ata de Reunião</h1>
              <p>Os campos obrigatórios estão marcados com um asterisco (*)</p>
            </div>
            <div className={styles.inputs}>
              <h1>Identificação</h1>
              <div className={styles.labelfloat}>
                <input type="text" placeholder='Título *' id="titulo" required/>
                <label>Título *</label>
              </div>
              <div>
                <select name="local" id="local" required>
                  <option value="">Local *</option>
                  {local.map(local => (
                    <option key={local.id} value={local.id}>{local.nome}</option>
                  ))}
                </select>
              </div>
              <div className={styles.datas}>
                <input
                  type="text"
                  placeholder='Data e Horário de Início *'
                  onChange={(e) => console.log(e.target.value)}
                  onFocus={(e) => (e.target.type = "datetime-local")}
                  onBlur={(e) => (e.target.type = "text")}
                  id="dataInc"
                  style={{marginRight:20}} 
                />
                <input
                type="text"
                placeholder='Data e Horário de Fim'
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                id="dataFim"
                style={{marginLeft:20}} 
                />
                {/* <input type="datetime-local" placeholder="Data Início *" id="dataInc" style={{marginRight:20}} />
                <input type="datetime-local" placeholder="Data Fim *" id="dataFim" style={{marginLeft:20}}/> */}
              </div>
              <div>
                <select name="tipo" id="tipo" onChange={handleChangeTipoReuniao}  required>
                  <option value="">Tipo *</option>
                  {tiposReuniao.map(tipo => (
                    <option key={tipo.id} value={tipo.id}>{tipo.nome}</option>
                  ))}  
                </select>
              </div>

            </div>
            <h1 className={styles.subtitle}>Conteúdo da Reunião</h1>
            <div className={tipoReuniao === '0' ? styles.cardTxt_1:styles.cardTxt}>
              {
                tipoReuniao === "1" ? <CardTextResumida texto=''/> :
                tipoReuniao === "2" ? <CardTextDailyScrum texto=''/>:
                tipoReuniao === "3" ? <CardTextSprint texto=''/>:
                tipoReuniao === "4" ? <CardTextAcompanhamento texto=''/>:
                <div>Selecione o tipo de Reunião</div>        
              }
              
            </div>
            <div className={styles.submit}>
              <Link href="/">
                <button type="submit" className={styles.cancelar}>CANCELAR</button>            
              </Link>
              <button type="submit" className={styles.enviar} onClick={handleSave}>SALVAR ATA</button>
            </div>
          </form>

        </main>
      </div>
    </>
  );
}