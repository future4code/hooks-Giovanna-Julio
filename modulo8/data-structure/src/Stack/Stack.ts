class Stack {
    constructor(
        public items: any[] = [],
        public length: number = 0
    ) {}
  
    push(item: any) {
        this.items[this.length] = item
        this.length++
    }

    pop() {
        if(this.length === 0) {
            console.log("Empty stack")
        } else {
            this.length--
            const removedItem = this.items[this.length]
            this.items.length = this.length 
            return removedItem
        }
    }

    peek() {
        return this.items[this.length-1]
    }
}
