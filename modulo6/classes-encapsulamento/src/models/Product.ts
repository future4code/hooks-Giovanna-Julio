export class Product {
    constructor(
        private id: string,
        name: string,
        private price: number
    ){}
    getPrice(): number{
        return this.price
    }
};