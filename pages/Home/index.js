import styles from '../../styles/pages/Home.module.css';
import Head from 'next/head'
import { Header } from '../../components/Header'
import Ata from '../../components/Ata';
import Link from 'next/link';
import React from 'react';
import { useEffect, useState } from 'react';

export default function Home() {

  const [atas, setAtas] = useState([]);

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
    // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzg5NWMwMS1lNTBkLTQ2OTUtOWY5MC05OGMzMjlhMTMzYTQiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW81QHRlc3RlLmNvbSIsInN1YiI6IjYiLCJlbWFpbCI6InVzdWFyaW81QHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiWjJLQ0FBNlNWQURaQVZORkJUWTZFQ0pLVE4zMk9HUUoiLCJleHAiOjE2NTU5MjM1OTN9.x8kOVlzaaigMNLoXWiVLjrwQf4Geg0TQrIaz4eltmGI'
    async function fetchData() {
      try{
        await fetch('https://desafio-iall.azurewebsites.net/api/Atas', {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(res => res.json())
          .then(data => {
            console.log(data);
            setAtas(data);
          }
        )
        }catch(err){
          console.log(err);
        }
      }
    fetchData();
  },[auth]);

  //Criando listas de atas pelos tipos (!!!)
  const acompanhamento = []
  const daily = []
  const resumidas = []
  const sprint = []

  atas.forEach(element => {
    if(element.tipoReuniao === "Acompanhamento de OKRs (Objectives and Key Results)"){
      acompanhamento.push(element)
    }
    if(element.tipoReuniao === "Daily Scrum"){
      daily.push(element)
    }
    if(element.tipoReuniao === "Resumida"){
      resumidas.push(element)
    }
    if(element.tipoReuniao === "Sprint Retrospective"){
      sprint.push(element)
    }
  });

  //ordenando as atas por data
  acompanhamento.sort((a, b) => {
    return new Date(a.dataFim) - new Date(b.dataFim);
  }
  );
  daily.sort((a, b) => {
    return new Date(a.dataFim) - new Date(b.dataFim);
  }
  );
  resumidas.sort((a, b) => {
    return new Date(a.dataFim) - new Date(b.dataFim);
  }
  );
  sprint.sort((a, b) => {
    return new Date(a.dataFim) - new Date(b.dataFim);
  }
  );


  return (
    <>
      <Head>
        <title>Listagem de Atas</title>
      </Head>
      <Header/>
      <main className={styles.container}>

        <div className={styles.contents}>
          <div className={styles.title}>
            <div>
              <h1>Atas de Renião</h1>
              <p>
                Estas são as atas das últimas reuniões
              </p>
            </div>
            
            <Link href="/NewAta">
              <button>+ NOVA ATA</button>
            </Link>
          </div>
          <div className={styles.atas}>
            {
              acompanhamento.length > 0 ? <h1 className={styles.atasTitle}>Acompanhamento de OKRs (Objectives and Key Results)</h1> : ''
            }
            {
              acompanhamento.length > 0 ? acompanhamento.map(ata => {
                return <Ata key={ata.id} title={ata.titulo} text={ata.dataInicio} id={ata.id} local={ata.local}/>
              }) : ''
            }
            {
              daily.length > 0 ? <h1 className={styles.atasTitle}>Daily Scrum</h1> : ''
            }
            {
              daily.length > 0 ? daily.map(ata => {
                return <Ata key={ata.id} title={ata.titulo} text={ata.dataInicio} id={ata.id} local={ata.local}/>
              }) : ''
            }
            {
              resumidas.length > 0 ? <h1 className={styles.atasTitle}>Resumida</h1> : ''
            }
            {
              resumidas.length > 0 ? resumidas.map(ata => {
                return <Ata key={ata.id} title={ata.titulo} text={ata.dataInicio} id={ata.id} local={ata.local}/>
              }) : ''
            }
            {
              sprint.length > 0 ? <h1 className={styles.atasTitle}>Sprint Retrospective</h1> : ''
            }
            {
              sprint.length > 0 ? sprint.map(ata => {
                return <Ata key={ata.id} title={ata.titulo} text={ata.dataInicio} id={ata.id} local={ata.local}/>
              }) : ''
            }
          </div>
        </div>
        
      </main>
    </>
  )
}