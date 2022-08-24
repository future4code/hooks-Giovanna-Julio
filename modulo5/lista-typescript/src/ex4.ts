enum SETOR {
    M = 'MARKETING',
    V = 'VENDAS',
    F = 'FINANCEIRO'
}

type colaborador = {
    nome: string,
    salario: number, 
    setor: SETOR,
    presencial: boolean
}


const colaboradores: colaborador[] = [
	{ nome: "Marcos", salario: 2500, setor: SETOR.M, presencial: true },
	{ nome: "Maria" ,salario: 1500, setor: SETOR.V, presencial: false},
	{ nome: "Salete" ,salario: 2200, setor: SETOR.F, presencial: true},
	{ nome: "João" ,salario: 2800, setor: SETOR.M, presencial: false},
	{ nome: "Josué" ,salario: 5500, setor: SETOR.F, presencial: true},
	{ nome: "Natalia" ,salario: 4700, setor: SETOR.V, presencial: true},
	{ nome: "Paola" ,salario: 3500, setor: SETOR.M, presencial: true }
]

const acharColaboradores = (lista: colaborador[]): colaborador[] => {
   
    const listaMrktngPresencial = lista.filter((item)=>{
        return item.setor === SETOR.M && item.presencial === true
    })

    return listaMrktngPresencial
}