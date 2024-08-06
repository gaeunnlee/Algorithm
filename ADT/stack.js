// 직접 구현
class Stack {
  constructor(maxSize) {
    this.data = [];
    this.maxSize = maxSize;
    this.top = -1;
  }
  isFull() {
    return this.top === this.maxSize - 1;
  }

  isEmpty() {
    return this.top === -1;
  }
  push(number) {
    if (!this.isFull()) {
      this.top += 1;
      this.data[this.top] = number;
    }
  }

  pop() {
    if (!this.isEmpty()) {
      this.top -= 1;
      this.data.pop();
    }
  }
}


//교재
const stack = []; // 스택 초기화
const maxSize = 10; // 스택의 최대 크기

function isFull(stack) {
  // 스택이 가득 찾는지 확인하는 함수
  return stack.length === maxSize;
}

function isEmpty(stack) {
  // 스택이 비어있는지 확인하는 함수
  return stack.length === 0;
}

function push(stack, item) {
  // 스택에 데이터를 추가하는 함수
  if (isFull(stack)) {
    console.log("스택이 가득 찼습니다.");
  } else {
    stack.push(item);
    console.log("데이터가 추가되었습니다.");
  }
}

function pop(stack) {
  // 스택에서 데이터를 꺼내는 함수
  if (isEmpty(stack)) {
    console.log("스택이 비어있습니다.");
    return null;
  } else {
    return stack.pop();
  }
}
