import Node from './Node.js';

class LinkedList {
    constructor(elements) {
        let currentNode = null;
        if(elements) {
            elements.reverse().forEach(element => {
                const node = new Node(element, currentNode);
                currentNode = node;
            })
        }
        this.head = currentNode;
    }

    print() {
        let currentHead = this.head;
        while(currentHead) {
            process.stdout.write(currentHead.data);
            if (currentHead.next) {
                process.stdout.write(" -> ");
            }
            currentHead = currentHead.next;
        }
        console.log();
    }

    getLength() {
        let length = 0;
        let currentHead = this.head;
        while(currentHead) {
            length += 1;
            currentHead = currentHead.next;
        };
        return length;
    }

    append(value) {
        let currentHead = this.head;
        while(currentHead.next) {
            currentHead = currentHead.next;
        }
        currentHead.next = new Node(value, null);
    }

    insert(index, value) {
        let count = 0;
        let currentHead = this.head;
        if (index === 0) {
            const node = new Node(value, currentHead);
            this.head = node;
            return;
        }
        while(count !== index - 1) {
            currentHead = currentHead.next;
            count += 1;

            if (!currentHead) {
                console.log("Error: index out of range");
                return;
            }
        }
        const newNode = new Node(value, currentHead.next);
        currentHead.next = newNode;
    }

    delete(value) {
        let currentHead = this.head;
        const ERROR_MESSAGE = "Error: element not found";
        if (!currentHead) {
            console.log(ERROR_MESSAGE);
            return;
        }
        if (currentHead.data === value) {
            this.head = currentHead.next;
            return;
        }
        while(currentHead.next.data !== value) {
            currentHead = currentHead.next;
            if (!currentHead.next) {
                console.log(ERROR_MESSAGE);
                return;
            }
        }
        
        currentHead.next = currentHead.next.next;
    }

    deleteAtIndex(index) {
        
    }
}

export default LinkedList;