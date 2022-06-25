import Link from 'next/link'
import {FiTrash , FiEye} from 'react-icons/fi'
import styles from '../../styles/components/Ata.module.css'
import { useState, useEffect} from 'react';

export default function Ata(props) {

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


    async function Delete() {

        // const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIxNzg5NWMwMS1lNTBkLTQ2OTUtOWY5MC05OGMzMjlhMTMzYTQiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW81QHRlc3RlLmNvbSIsInN1YiI6IjYiLCJlbWFpbCI6InVzdWFyaW81QHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiWjJLQ0FBNlNWQURaQVZORkJUWTZFQ0pLVE4zMk9HUUoiLCJleHAiOjE2NTU5MjM1OTN9.x8kOVlzaaigMNLoXWiVLjrwQf4Geg0TQrIaz4eltmGI'
        await fetch('https://desafio-iall.azurewebsites.net/api/Atas/'+props.id, {
            method: 'DELETE',
            headers: {
                Authorization: `Bearer ${token}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: props.id})
        })
        .then(res => res.json())
        window.location.reload()


    }
    return (
        <div className={styles.container}>
            <div>
                <h1>{props.title}</h1>
                <p>{props.text}, na {props.local}</p>
            </div>
            <div className={styles.icons}>
                <Link href={`/ViewForm/${props.id}`}>
                    <FiEye size={20} style={{marginLeft: 10, cursor: 'pointer'}}/>
                </Link>
                <FiTrash size={20} style={{marginLeft: 10, cursor: 'pointer'}} onClick={Delete}/>
            </div>
        </div>
    )

}
        