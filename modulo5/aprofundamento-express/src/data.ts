export type taskFormat = {
    userId: number,
    id: number | string,

    title: string,
    completed: boolean
}


export const toDo: taskFormat[] = [


    {
        userId: 1,
        id: 11,
        title: "laundry",
        completed: false
    },
    {
        userId: 2,
        id: 21,
        title: "cut the grass",
        completed: true
    },
    {
        userId: 3,
        id: 31,
        title: "do the dishes",
        completed: false
    }
]