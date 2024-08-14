// 1. shift 메서드 사용

const queue = [];

queue.push(1); // 큐에 데이터 추가

let firstItem = queue.shift(); // 큐의 맨 앞 데이터 제거

// 2. 배열을 이용하는 방식

class Queue {
  items = [];
  front = 0;
  rear = 0;

  push(item) {
    this.items.push(item);
    this.rear++;
  }

  pop() {
    return this.items[front++];
  }

  isEmpty() {
    return this.front === this.rear;
  }
}

// 3. 연결 리스트를 이용하는 방식

class Node {
  constructor(data) {
    this.data = data; // 요소의 값
    this.next = null; // 다음 요소를 참조
  }
}

class Queue {
  constructor() {
    this.head = null; // 첫 번째 요소 참조
    this.tail = null; // 마지막 요소 참조
    this.size = 0; // 큐의 길이
  }

  push(data) {
    const newNode = new Node(data); // 새로운 요소를 생성

    if (!this.head) {
      // 큐가 비어 있다면 head의 tail을 모두 새로 생성한 요소로 설정
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
  }
  pop() {
    if (!this.head) {
        return null;
    }
    this.size--;

    return removeNode.data;
  }
  isEmpty() {
    return this.size === 0;
  }
}
