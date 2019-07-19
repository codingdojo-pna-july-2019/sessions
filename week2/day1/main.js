
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

  print2() {
    console.log(`Beginning to print list2`);
    this.traverse(console.log);
    this.traverse(node => console.log(node.value));
    console.log('finished printing list2');

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

  traverse(callback) {
    let current = this.head;

    // console.log('this is callback', callback());

    while (current) {
      callback(current);
      current = current.next;
    }
  }

  length() {
    let count = 0;
    let current = this.head;

    while (current) {
      count++;
      current = current.next;
    }

    return count;
  }

  length2() {
    let count = 0;

    this.traverse(() => count++);

    return count;
  }

  /**  
   * 
   * SList: Max
American Idol seems to air singers that are the best, and a few that seem like the worst! 
Create function max(node) to return list’s largest val.
*/
  max() {
    let current = this.head;
    let max = current ? current.value : null;

    while (current) {
      if (current.value > max) {
        max = current.value;
      }

      current = current.next;
    }

    return max;
  } 

  max2() {
    let max = this.head ? this.head.value : null;

    this.traverse(function (node) {
      if (node.value > max) {
        console.log('found new max value ', max, node.value);
        max = node.value;
      }
    });

    return max;
  }

  min() {
    let current = this.head;
    let min = current ? current.value : null;

    while (current) {
      if (current.value < min) {
        min = current.value;
      }

      current = current.next;
    }

    return min;
  } 

  min2() {
    let min = this.head ? this.head.value : null;

    this.traverse(function (node) {
      if (node.value < min) {
        min = node.value;
      }
    });

    return min;
  }
  
/**


SList: Min
Create min(node) to return list’s smallest val. 


/** 
 * 
SList: Average
Create average(node) to return average val.
   * 
  */
  
  average() {
    let current = this.head;
    let length = 0;
    let sum = 0;

    while (current) {
      sum += current.value;
      length++;
      current = current.next;
    }

    return sum / length;
  }

  average2() {
    const length = this.length();
    let sum = 0;

    // this.traverse(function (node) {
    //   sum += node.value;
    // });

    this.traverse(node => sum += node.value);

    return sum / length;
  }
}

const array = [1, 2, 3, -12, 5, 6, 7];


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
list.print2();

console.log('contains 9999', list.contains(9999));

console.log('the list length is ' + list.length());
console.log('the list 2length is ' + list.length2());
console.log('the max value is ' + list.max());
console.log('ths min value is ' + list.min());
console.log('ths min2 value is ' + list.min2());
console.log('the average is ' + list.average());
console.log('the average2 is ' + list.average2());
console.log('the max2 value is ' + list.max2());

// function concatArr(firstArray, secondArray) {
//   // set arrays in a variable then push the second array to the new first array
//   for (var index = 0; index < secondArray.length; index++) {
//     var insertValue = secondArray[index]
//     console.log(insertValue)
//     firstArray[firstArray.length] = insertValue
//     console.log(firstArray)
//   }

//   return firstArray;
// }
// console.log(concatArr([1, 2, 3], [4, 5, 6, 3, 9, 20]));