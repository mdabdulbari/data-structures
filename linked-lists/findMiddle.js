import LinkedList from "./LinkedList.js";

const getMiddle = (head) => {
    let head2 = head;
    while (head2 && head2.next) {
        head = head.next;
        head2 = head2.next.next;
    }
    return head;
};

const linkedList = new LinkedList([1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(getMiddle(linkedList.head).data);
