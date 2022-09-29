export class Product {
    constructor(
        private id: string,
        private name: string,
        private price: number
    ){}
    
    getId() {
        return this.id
    }

    getName() {
        return this.name
    }

    getPrice() {
        return this.price
    }
};