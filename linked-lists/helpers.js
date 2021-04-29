import LinkedList from "./LinkedList.js";

const getLinkedListWithCycle = () => {
    const linkedList = new LinkedList(["a", "b", "c", "d", "f", "g", "h"]);
    let currentNode = linkedList.head;
    let i = 0;
    let middleNode;
    while (currentNode.next) {
        if (i === 2) {
            middleNode = currentNode;
        }
        currentNode = currentNode.next;
        i += 1;
    }
    currentNode.next = middleNode;
    return linkedList;
};

const printLinkedList = (head) => {
    let currentHead = head;
    while (currentHead) {
        process.stdout.write(JSON.stringify(currentHead.data));
        if (currentHead.next) {
            process.stdout.write(" -> ");
        }
        currentHead = currentHead.next;
    }
    console.log();
};

export { getLinkedListWithCycle, printLinkedList };
