import LinkedList from './LinkedList.js';

const linkedList = new LinkedList(['one', 'two', 'three', 'five', 'six']);
console.log("\nappending seven");
linkedList.append('seven');
linkedList.print();

console.log("\ninserting four at index 3");
linkedList.insert(3, 'four');
linkedList.print();

console.log("\ndeleting two");
linkedList.delete('two');
linkedList.print();

console.log("\ndeleting element at index 2");
linkedList.deleteAtIndex(2);
linkedList.print();

console.log("\nreversing the linked list");
linkedList.reverse();
linkedList.print();

console.log("\nlength of linked list");
console.log(linkedList.getLength())