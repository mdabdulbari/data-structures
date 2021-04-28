import { getLinkedListWithCycle } from "./helpers.js";
import LinkedList from "./LinkedList.js";

const hasCycle = (head) => {
  if (!head || !head.next) {
    return false;
  }
  let pointer1 = head;
  let pointer2 = head.next;
  while (pointer2 && pointer2.next) {
    if (pointer1 === pointer2) {
      return true;
    }
    pointer1 = pointer1.next;
    pointer2 = pointer2.next.next;
  }
  return false;
};

const linkedListWithCycle = getLinkedListWithCycle();
const linkedListWithoutCycle = new LinkedList(["a", "b", "c"]);

console.log(hasCycle(linkedListWithCycle.head), "----linkedListWithCycle");
console.log(
  hasCycle(linkedListWithoutCycle.head),
  "----linkedListWithoutCycle"
);
