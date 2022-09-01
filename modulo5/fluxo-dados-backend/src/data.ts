export type productInfo = {
    id: string,
    name: string,
    price: number
}

export const productList: productInfo[] = [
    { id: "1", name: "MacBook", price: 2000 },
    { id: "2", name: "iPhone 13", price: 1000 },
    { id: "3", name: "McDonalds Fries", price: 1 }
]