// Getting Started with JavaScript, v2
// Scope
// 25.block-scoping-with-let.js

/* IFFEs:

var teacher = "Kyle";

(function anotherTeacher(params) {
    var teacher = "Suzy";
     console.log(teacher);  // Suzy    
} )();

console.log(teacher); // Kyle
*/



var teacher = "Kyle";
{
    let teacher = "Suzy";
    console.log(teacher); // Suzy
}
console.log(teacher); //Kyle

/*
So instead of using this IIFE example to protect the teacher variable declaration on line 4 from changing the one from line 1, we want those to be separate variable,s and we need a scope. And instead of using a function to do that, now we have the option of simply using a curly brace block, and we switch from using a var to using a let.

*/