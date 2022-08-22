let minhaString: string | number = 2

let meuNumber: string | number = 2

type pessoa = {
    nome: string,
    idade: number,
    corFavorita: string
}

enum Cor {
    VERM = 'VERMELHO',
    L = 'LARANJA',
    AM = 'AMARELO',
    VERD = 'VERDE',
    AZ = 'AZUL',
    AN = 'ANIL',
    VI ='VIOLETA'
}

const gio: pessoa = {
    nome: 'giovanna',
    idade: 24,
    corFavorita: Cor.AZ
}

const nitchos: pessoa = {
    nome: 'bruninho',
    idade: 4,
    corFavorita: Cor.VERM
}

const irma: pessoa = {
    nome: 'giulia',
    idade: 22,
    corFavorita: Cor.VI
}

const bisulina: pessoa = {
    nome: 'lucila',
    idade: 75,
    corFavorita: Cor.AM
}

const ioio: pessoa = {
    nome: 'iohany',
    idade: 30,
    corFavorita: Cor.AN
}