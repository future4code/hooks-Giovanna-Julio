export enum STATUS {
    TODO = 'to do',
    DOING = 'doing',
    DONE = 'done'
}

export type User = {
    id: string,
    name: string,
    nickname: string,
    email:string
}

export type Task = {
    id: string,
    title: string,
    description: string,
    due_date: string, 
    status: STATUS,
    user_id: string,
}