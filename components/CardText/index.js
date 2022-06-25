import styles from '../../styles/components/CardText.module.css';

export function CardTextResumida(props) {
    return (
        <div className={styles.cardText}>
            <h1>Descrição dos Ocorridos</h1>
            <textarea id = "textResumida">
                {props.texto[0]?.valor}
            </textarea>
        </div>
    );
}

export function CardTextDailyScrum(props) {
    return (
        <div className={styles.cardText}>
            <div >
                <h1>O que foi feito hoje?</h1>
                <textarea id='textDailyScrum-1'>
                    {props.texto[0]?.valor}
                </textarea>
            </div>
            <div>
                <h1>O que será feito amanhã ?</h1>
                <textarea id='textDailyScrum-2'>
                    {props.texto[1]?.valor}
                </textarea>
            </div>
        </div>
    )
}

export function CardTextSprint(props) {
    return(
        <div className={styles.cardText}>
            {/* <input type="text" placeholder={props.texto === '' ? 'Data inicio *': props.texto[0]?.valor} id='sprintData'/> */}
            <input
                type="text"
                placeholder={props.texto === '' ? 'Data inicio *': props.texto[0]?.valor}
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                id="sprintData"
            />
            <div>
                <h1>Avaliação da Sprint</h1>
                <textarea id='sprintText'>
                    {props.texto[1]?.valor}
                </textarea>
            </div>
        </div>
    )
}

export function CardTextAcompanhamento(props) {
    return (
        <div className={styles.cardText}>
            {/* <input type={props.texto === '' ? 'datetime-local': 'text'} placeholder={props.texto === '' ? 'Data inicio *': props.texto[0]?.valor}  id='acData'/> */}
            <input
                type="text"
                placeholder={props.texto === '' ? 'Data inicio *': props.texto[0]?.valor}
                onChange={(e) => console.log(e.target.value)}
                onFocus={(e) => (e.target.type = "datetime-local")}
                onBlur={(e) => (e.target.type = "text")}
                id="acData"
            />
            <input type="text" placeholder={props.texto === '' ? "Objetivo Principal do Trimestre *": props.texto[1]?.valor}id='acObjetivo'/>
            <h1>Resultados Obtidos Durante Os Meses</h1>
            <textarea id='acText'>
                {props.texto[2]?.valor}
            </textarea>
        </div>
    )
}