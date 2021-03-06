/*
Write a function called “computeAreaOfACircle”.

Given the radius of a circle, “computeAreaOfACircle” returns its 
area.

var output = computeAreaOfACircle(4);
console.log(output); // --> 50.26548245743669

*/ 
// Main function 
var computeAreaOfACircle = function (radius) { 
  return Math.PI * radius * radius; 
}

// Input testing 
console.log(computeAreaOfACircle(4)); 

