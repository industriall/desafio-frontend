
//criar uma ata 
var ID = 0;

const ata = [
    {   
        id: ID,
        titulo: "Título da ata (Exemplo)",
        dataInicio: "08/06/2022 às 15h:30",
        dataFim: "08/06/2022 às 15h:30",
        tipoReuniaoID: 1,
        localID: 1,
        camposAtaReuniao: [
            {
                camposID: 1,
                valor: "Valor do campo"
            }
        ]
    },
]

export default function handler(req, res) {
    if(req.method === 'GET') {
        res.status(200).json(ata);
    }
    if(req.method === 'POST'){
        let body = req.body;
        console.log(body)
      
     
    }
    if(req.method === 'DELETE'){
        //deletar ata
        let body = req.body;
        let index = ata.findIndex(ata => ata.id === body.id);
        ata.splice(index, 1);

        res.status(200).json(ata);

    }
}