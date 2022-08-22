enum GENERO {
	ACAO="ação",
	DRAMA="drama",
	COMEDIA="comédia",
	ROMANCE="romance",
	TERROR="terror"
}

type ficha = {
    nome: string,
    anoLancamento: number,
    genero: GENERO, 
    nota?: number
}

const organizaFilme = (nome: string, anoLancamento: number, genero: GENERO, nota: number) => {

    let info: ficha = {
        nome: nome,
        anoLancamento: anoLancamento,
        genero: genero,
        nota: nota
    }

    return info
}