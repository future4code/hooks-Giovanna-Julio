export type accountFormat = {
    id: string,
    name: string,
    cpf: number,
    dOb: number,
    balance: number,
    spendings: spendingsFormat[]
}

export type spendingsFormat = {
    amount: number,
    date: string,
    description: string
}

export const accounts: accountFormat[] = [
    {
        id: "1",
        name: "Gina",
        cpf: 18700985945,
        dOb: 17112001,
        balance: 100,
        spendings: [
            {
            amount: 50,
            date: '31082022',
            description: "gas"
            }
        ]
        
    },
    {
        id: "2",
        name: "Bruno",
        cpf: 79538712925,
        dOb: 11042000,
        balance: 500,
        spendings: [
            {
            amount: 15,
            date: '31082022',
            description: "cigarettes"
            },
            {
            amount: 20,
            date: '31082022',
            description: "food"
            }
        ]
        
        
    },
    {
        id: "3",
        name: "Lucila",
        cpf: 11233455777,
        dOb: 28111947,
        balance: 1000,
        spendings: [
            {
            amount: 200,
            date: '31082022',
            description: "purse"
            }
        ]
    }       

]

export const constructDate = (date: Date): string => {
    const day: string = date.getDate().toString()
    const month: string = date.getMonth().toString()
    const year: string = date.getFullYear().toString()
    const fullDate = day + month + year
    return fullDate
}
export const presentDate = constructDate(new Date())