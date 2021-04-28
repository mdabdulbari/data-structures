import LinkedList from "./LinkedList.js";
import { printLinkedList } from "./helpers.js";
import Node from "./Node.js";

const mergeSortedLinkedLists = (head1, head2) => {
  let firstData;
  if (head1.data < head2.data) {
    firstData = head1.data;
    head1 = head1.next;
  } else {
    firstData = head2.data;
    head2 = head2.next;
  }
  const finalLinkedList = new LinkedList([firstData]);
  let finalHead = finalLinkedList.head;
  while (head1 && head2) {
    if (head1.data < head2.data) {
      finalHead.next = new Node(head1.data, null);
      head1 = head1.next;
      finalHead = finalHead.next;
    } else {
      finalHead.next = new Node(head2.data, null);
      head2 = head2.next;
      finalHead = finalHead.next;
    }
  }
  if (head1) {
    finalHead.next = head1;
  } else if (head2) {
    finalHead.next = head2;
  }
  return finalLinkedList.head;
};

const linkedList1 = new LinkedList([1, 2, 4]);
const linkedList2 = new LinkedList([1, 3, 4]);
printLinkedList(mergeSortedLinkedLists(linkedList1.head, linkedList2.head));
