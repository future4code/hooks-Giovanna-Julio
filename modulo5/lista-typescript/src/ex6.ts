type cadastro = {
    cliente: string,
    saldoTotal: number,
    debitos: number[]
}


const clientes: cadastro[] = [
	{ cliente: "João", saldoTotal: 1000, debitos: [100, 200, 300] },
	{ cliente: "Paula", saldoTotal: 7500, debitos: [200, 1040] },
	{ cliente: "Pedro", saldoTotal: 10000, debitos: [5140, 6100, 100, 2000] },
	{ cliente: "Luciano", saldoTotal: 100, debitos: [100, 200, 1700] },
	{ cliente: "Artur", saldoTotal: 1800, debitos: [200, 300] },
	{ cliente: "Soter", saldoTotal: 1200, debitos: [] }
]

const potencialEmprestimo = (clientela: cadastro[]): cadastro[] => {
    
    for (let conta of clientes){
        let somaDebito = conta.debitos.reduce((valorTotal: number, proximoValor: number) => valorTotal += proximoValor, 0)
        conta.saldoTotal -= somaDebito
        conta.debitos = []
    }
    
    let clienteSaldoNegativo = clientela.filter((item)=> {
        return item.saldoTotal < 0
    })

    return clienteSaldoNegativo
}