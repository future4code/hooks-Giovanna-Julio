class Queue {
    constructor(
        public items: any = [],
        public length: number = 0
    ) {}

    
    enqueue(item: any) {
        this.items[this.length] = item
        this.length++
    }

    dequeue() {
        if(this.length === 0){
            console.log("Empty queue")
        } else {
            const removedItem = this.items[0]
                for(let i=0; i<this.length; i++){
                    this.items[i] = this.items[i+1]
                }
                this.length--
                this.items.length = this.length
                return removedItem
        }
    }

    front() {
        return this.items[0]
    }
}