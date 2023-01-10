import { Node } from "./Node"

export class LinkedList {
    constructor(
        public head: Node | null = null
    ){}
   
         addToTail(value: any) {
            const nodeToAdd = new Node(value)
            if(!this.head){
                this.head = nodeToAdd
            } else {
                let currentNode = this.head
                while(currentNode.next) {
                    currentNode = currentNode.next
                }
                currentNode.next = nodeToAdd
            }
         }

         find(value:any) {
            let currentNode = this.head
            while(currentNode!.next !== null && currentNode!.value !== value ) {
                currentNode = currentNode!.next
            }
            return currentNode || -1
         }
}
