var arr = [89, 10, 1, 2, 3, 4, 45, 6, 7, -9, 8];

/** 
 * Push Front
Given an array and an additional value, insert this value at the beginning 
of the array. Do this without using any built-in array methods.
 * 
*/

function pushFront(array, value) {
  // for (var index = array.length; index > 0; index--) {
  //   var content = array[index - 1];
  //   // console.log('index is ' + index, content);
  //   array[index] = content;
  // }
  // array[0] = value;
  return insertAt(array, 0, value);
  // return array;
}

pushFront(arr, 8);

console.log(arr);

/** 
 * Insert At
Given an array, index, and additional value, insert the value into array at given index. 
Do this without using built-in array methods. 
You can think of pushFront(arr,val) as equivalent to insertAt(arr,0,val).
 * 
*/


function insertAt(array, position, value) {
  for (var index = array.length; index > position; index--) {
    var content = array[index - 1];
    array[index] = content;
  }

  array[position] = value;
  return array;
}


console.log(insertAt(arr, 6, 99999));
/**  
 * Pop Front
Given an array, remove and return the value at the beginning of the array. 
Do this without using any built-in array methods except pop().
*/

function popFront(array) {
  return removeAt(array, 0);
}

console.log(popFront(arr));

/**  
 * Remove At
Given an array and an index into array, remove and return the array value at that index. 
Do this without using built-in array methods except pop().
 * 
*/

function removeAt(array, position) {
  var value = array[position];
  for (var index = position; index < array.length; index++) {
    var content = array[index + 1];
    array[index] = content;
  }
  array.length--;
  return value;
}


console.log(removeAt(arr, 4));



/**  
 * Min to Front
Given an array of comparable values, move the lowest element to array’s front, 
shifting backward any elements previously ahead of it. 
Do not otherwise change the array’s order. 
Given [4,2,1,3,5], change it to [1,4,2,3,5] and return it. 
As always, do this without using built-in functions.
 * 
*/

function minToFront(array) {
  var minPosition = 0;

  for (var index = 1; index < array.length; index++) {
    if (array[index] < array[minPosition]) {
      minPosition = index;
    }
  }

  return pushFront(array, removeAt(array, minPosition));
  // console.log('min value', array);
  // for (var index = minPosition; index < array.length; index++) {
  //   var content = array[index + 1];
  //   array[index] = content;
  // }
  // array.length--;
  // console.log('min position' + minPosition);
  // console.log(array);

  // for ()

  

}

console.log(minToFront(arr));


/**  
 * 
 * Rotate
Implement rotateArr(arr, shiftBy) that accepts array and offset. 
Shift arr’s values to the right by that amount. 
‘Wrap-around’ any values that shift off array’s end to the other side, 
so that no data is lost. Operate in-place: given ([1,2,3],1), 
change the array to [3,1,2]. Don’t use built-in functions.

Second: allow negative shiftBy (shift L, not R).

Third: minimize memory usage. With no new array, handle arrays/shiftBys in the millions.

Fourth: minimize the touches of each element.
 * 
*/

function rotate(array, shiftBy) {
  console.log(array.length, shiftBy);

  while (shiftBy < 0) {
    shiftBy += array.length;
  }
  shiftBy = shiftBy % array.length;
  console.log('shifting by', shiftBy);
  
  for (var index = 0; index < shiftBy; index++) {
    var last = array.pop();
    console.log('rotating x times', last);
    pushFront(array, last);
  }

  return array;
}


console.log(rotate(arr, -3));