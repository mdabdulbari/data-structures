import LinkedList from "./LinkedList.js";
import { printLinkedList } from "./helpers.js";

const mergeSortedLinkedLists = (head1, head2) => {
    let tmp;
    let pointer1 = head1.data <= head2.data ? head1 : head2;
    let pointer2 = pointer1 === head1 ? head2 : head1;
    while (pointer1.next && pointer2) {
        if (pointer1.next.data <= pointer2.data) {
            pointer1 = pointer1.next;
        } else {
            tmp = pointer2;
            pointer2 = pointer1.next;
            pointer1.next = tmp;
            pointer1 = pointer1.next;
        }
    }
    if (pointer2) {
        pointer1.next = pointer2;
    }
    return head1.data <= head2.data ? head1 : head2;
};

const linkedList1 = new LinkedList([1, 2, 4, 7, 12, 22]);
const linkedList2 = new LinkedList([1, 3, 4, 5, 9, 11, 12]);
printLinkedList(mergeSortedLinkedLists(linkedList1.head, linkedList2.head));
