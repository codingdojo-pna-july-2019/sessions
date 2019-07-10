
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class List {
  constructor() {
    this.head = null;
  }

  add(value) {
    const node = new Node(value);
    
    node.next = this.head;
    this.head = node;
    // if (this.head !== null) {
    //   this.head.next = node;
    // } else {
    //   this.head = node;
    // }


    return this;
  }

  print() {
    console.log(`Beginning to print list`);

    let current = this.head;

    while (current) {
      console.log(current.value);

      current = current.next;
    }

    console.log('finished printing list');
  }

  remove() {
    const current = this.head;

    if (current) {
      this.head = current.next;
    }

    // (expression) ? (if true) : (if false);
    return current ? current.value : null;

    // if (current) {
    //   return current.value;
    // } else {
    //   return null;
    // }
  }

  contains(findValue) {
    let current = this.head;

    while (current) {
      
      if (current.value === findValue) {
        return true;
      }

      current = current.next;
    }

    return false;
  }
}

const array = [1, 2, 3, 4, 5, 6, 7];


// const node1 = new Node(1);
// const node2 = new Node(2);
// const node3 = new Node(3);

// node2.next = node3;
// node1.next = node2;

const list = new List();
// list.head = node1;
console.log(list);
// console.log(node1);

// list = 'this is not a list';


list.add(11);
list.add(9);
for (let index = 0; index < array.length; index++) {
  const value = array[index];
  console.log('adding value ' + value);
  list.add(value);
}
list.print();
console.log('contains 7', list.contains(7));
console.log(list.remove());
console.log('contains 7', list.contains(7));
list.print();

console.log('contains 9999', list.contains(9999));