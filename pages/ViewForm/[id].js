import Head from "next/head"
import { Header } from "../../components/Header"
import Link from "next/link"

import styles from "../../styles/pages/ViewForm.module.css"
import React from "react"
import { useState,useEffect} from "react"
import { useRouter } from "next/router"
import { CardTextResumida, CardTextDailyScrum, CardTextSprint, CardTextAcompanhamento } from "../../components/CardText"

export default function ViewForm() {
    const { query } = useRouter()
    const [ata, setAta] = useState(null)
    const [tipoReuniao, setTipoReuniao] = useState(-1);


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
     

    useEffect(() => {
      async function fetchData() {
          // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzg5NWMwMS1lNTBkLTQ2OTUtOWY5MC05OGMzMjlhMTMzYTQiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW81QHRlc3RlLmNvbSIsInN1YiI6IjYiLCJlbWFpbCI6InVzdWFyaW81QHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiWjJLQ0FBNlNWQURaQVZORkJUWTZFQ0pLVE4zMk9HUUoiLCJleHAiOjE2NTU5MjM1OTN9.x8kOVlzaaigMNLoXWiVLjrwQf4Geg0TQrIaz4eltmGI'
          try{
            await fetch(`https://desafio-iall.azurewebsites.net/api/Atas/${query.id}`, {
              headers: {
                Authorization: `Bearer ${token}`
              }
            })
            .then(res => res.json())
            .then(data => {
              setAta(data)
              setTipoReuniao(data.tipoReuniaoId)
            }
            )
          }catch(err){
            console.log(err)
          }
      }
      fetchData();
      
    }, [auth])

    //buscar id na url
    return (
        <>
        <Head>
          <title>Ata</title>
        </Head>
        <Header/>
        <div className={styles.container}>
          <main className={styles.contents}>
            <form>
  
              <div className={styles.title}>
                <h1>Ata</h1>
              </div>
              <div className={styles.inputs}>
                <h1>Identificação</h1>
                <div className={styles.labelfloat}>
                  <input type="text" placeholder='Título *' id="titulo" required/>
                  <label>{ata?.titulo}*</label>
                </div>
                <div>
                  <select name="local" id="local" required>
                    <option value="">{ata?.local}</option>
                    
                  </select>
                </div>
                <div className={styles.datas}>
                  <input type="text" placeholder={ata?.dataInicio}id="dataInc" style={{marginRight:20}} />
                  <input type="text" placeholder={ata?.dataFim}id="dataFim" style={{marginLeft:20}}/>
                </div>
                <div>
                  <select name="tipo" id="tipo"required>
                    <option value="">{ata?.tipoReuniao}</option>
 
                  </select>
                </div>
  
              </div>
              <h1 className={styles.subtitle}>Conteúdo da Reunião</h1>
              <div className={tipoReuniao === '0' ? styles.cardTxt_1:styles.cardTxt}>
                {
                  tipoReuniao === 1 ? <CardTextResumida texto={ata?.camposAtaReuniao}/> :
                  tipoReuniao === 2 ? <CardTextDailyScrum texto={ata?.camposAtaReuniao}/>:
                  tipoReuniao === 3 ? <CardTextSprint texto={ata?.camposAtaReuniao}/>:
                  tipoReuniao === 4 ? <CardTextAcompanhamento texto={ata?.camposAtaReuniao}/>:
                  <div>Selecione o tipo de Reunião</div>        
                }
                
              </div>
              <div className={styles.submit}>
                <Link href="/">
                  <button type="submit" className={styles.cancelar}>CANCELAR</button>            
                </Link>
              </div>
            </form>
  
          </main>
        </div>
      </>
    )
}