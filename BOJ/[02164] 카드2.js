const fs = require('fs');
const file = process.platform === 'linux' ? '/dev/stdin' : 'BOJ/input.txt';
let N = Number(fs.readFileSync(file).toString().trim());

class LinkedList {
   constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
   }
   push(data) {
      let newNode = new Node(data);
      if (!this.head) {
         this.head = newNode;
      } else {
         this.tail.next = newNode;
         newNode.prev = this.tail;
      }
      this.tail = newNode;
      this.length++;
   }
   shift() {
      let shiftNodeData = this.head.data;
      this.head = this.head.next;
      this.head.prev = null;
      this.length--;
      return shiftNodeData;
   }
}

class Node {
   constructor(val) {
      this.data = val;
      this.next = null;
      this.prev = null;
   }
}

let list = new LinkedList();
for (let i = 1; i <= N; i++) {
   list.push(i);
}

while (list.length > 1) {
   list.shift();

   if (list.length === 1) {
      break;
   }

   list.push(list.shift());
}

console.log(list.head.data);
