type userFormat = {
    userId: number,
    name: string,
    phone: string,
    email?: string,
    website?: string
}

export const usersBase: userFormat[] = [
    {userId: 1, name: 'Giovanna', phone: '41999987912'},
    {userId: 2, name: 'Bruno Erê', phone: 'Não possui'},
    {userId: 3, name: 'Julio', phone: '5712893467'}
]

type postFormat = {
    postId: number,
    title: string,
    body: string,
    userId: number
}

export const allPosts: postFormat[] = [
    {   
        postId: 21,
        title: 'Anivessário',
        body: 'Convido todas as minhas crianças para meu anivessário da Patrulha Canina!',
        userId: 2
    },
    {   
        postId: 31,
        title: 'Do you know how fast you were going?',
        body: 'If I stop u, u get a ticket. Muahahaha',
        userId: 3
    },
    {   
        postId: 11,
        title: 'call me crzy',
        body: 'aside from being crzy I actually like backend shit',
        userId: 1
    },
    
] /*Separados pra ficarem mais organizados, já que tem o id do usuário de qualquer forma*/ 