/* Write a function called “getFullName”.
Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith' */

function getFullName (first, last) { 
  // return first + ' ' + last;  
  return first.concat (' ', last); 
}


// Input testing 
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'

