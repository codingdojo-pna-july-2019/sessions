

function printArray(array) {
  for (var index = 0; index < array.length; index++) {
    console.log(array[index]);
  }
}

function rPrintArray(array, index) {
  // setting state
  if (index === undefined) {
    index = 0;
  }

  // base case 
  if (index >= array.length) {
    return;
  }

  // function purpose
  console.log(array[index]);

  // recursion + forward progress
  rPrintArray(array, index + 1);
}

rPrintArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

/** 
 * Recursive Sigma
Write a recursive function that given a number returns the sum of integers from 1 to that number.
Example: rSigma(5) = 15 (1+2+3+4+5); rSigma(2.5) = 3 (1+2); rSigma(-1) = 0.
*/

function rSigma(num) {
  if (num <= 0) {
    return 0;
  }

  return rSigma(num - 1) + Math.floor(num);
}

console.log('rSigma', rSigma(5.5));


/** 
 * Recursive Factorial
Given num, return the product of ints from 1 up to num. If less than zero, treat as zero. 
If not an integer, truncate. Experts tell us 0! is 1. rFact(3) = 6 (1*2*3). 
Also, rFact(6.5) = 720 (1*2*3*4*5*6).
*/

function rFact(num) {
  if (num < 0) {
    return 0;
  }

  if (num <= 1) {
    return 1;
  }

  return rFact(num - 1) * Math.floor(num);
}

console.log('rFact', rFact(6.5));


/** 
 * 
 * Most graphical “paint” applications, have a ‘paintcan fill’ function that floods part of an image with a certain color. 
 * We change the image as if we painted a canvas: a two-dimensional array of integers, 
 * where each integer represents a color for that pixel. The canvas Array.length is the Y dimension of our canvas; 
 * each spot in the canvas array is a row in our image, with a length equal to our canvas’ X dimension. 
 * You are given a canvas (2 dimensional array of integers), starting coordinate (2-element array), and the color to 
 * flood (integer value). Build floodFill(canvas2D,startXY,newColor) ! Replace a pixel’s color value only if it is the 
 * same color as the origin coordinate and is directly adjacent via X or Y to another pixel you will change. 
 * Note: diagonally related pixels are not considered adjacent . Given canvas2D of 
 * [[3,2,3,4,3],
    [2,3,3,4,0] , 
    [7,3, 3 ,5,3] , 
    [6,5,3,4,1] , 
    [1,2,3,3,3] ]

…plus startXY of [2,2] and newColor of 1 .. . … we examine the cells that are directly (not diagonally) adjacent to startXY , which is [2,2] . If any have a value of 3 (the original value at startXY ), we change its value to 1 ( newColor ) and repeat the process with its directly-adjacent neighbor cells. We repeat this until th e entire zone of similarly-colored cells is changed .

Our canvas2D becomes: [[3,2, 1 ,4,3], [2, 1 , 1 ,4,0], [7, 1 , 1 ,5,3], [6,5, 1 ,4,1], [1,2, 1 , 1 , 1 ] ]
*/

const canvas = [
  [3, 2, 3, 4, 3],
  [2, 3, 3, 4, 0],
  [7, 3, 3, 5, 3],
  [6, 5, 3, 4, 1],
  [1, 2, 3, 3, 3]
];

function floodFill(matrix, startXY, newColor, oldColor) {
  const x = startXY[0];
  const y = startXY[1];
  const currentColor = matrix[y][x];
  console.log('matrix', matrix[y].length);

  // set old color on first run
  if (oldColor === undefined) {
    oldColor = currentColor;
  }

  // base case 
  if (currentColor !== oldColor) {
    console.log('old and current', oldColor, currentColor);
    return;
  }

  matrix[y][x] = newColor;


  // console.log('old color is ', oldColor);

  // forward progress
  if (x + 1 < matrix[y].length) {
    // recursion
    floodFill(matrix, [x + 1, y], newColor, oldColor);
  }

  if (x - 1 >= 0) {
    floodFill(matrix, [x - 1, y], newColor, oldColor);
  }

  if (y + 1 < matrix.length) {
    floodFill(matrix, [x, y + 1], newColor, oldColor);
  }

  if (y - 1 >= 0) {
    floodFill(matrix, [x, y - 1], newColor, oldColor);
  }


  return matrix;
}

console.log(floodFill(canvas, [2, 2], 9));