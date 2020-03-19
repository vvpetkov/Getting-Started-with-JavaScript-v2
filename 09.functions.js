/* abstraction: 
What is a function? Well, similar to the idea of wanting to repeat things, there are times when we have a collection of statements like a paragraph in a novel.

But we wanna do that multiple times in different places, not multiple times in a row but like do it one time and a little bit later do it again. And maybe a minute later do it again. And that's when we wanna group that information into what we call a function.

Actually technically the computer science programming term for this would be a procedure.

It's a collection of things that we want it to do.
*/

// procedure
function greetStudent(student) {
  console.log(
    `Hello, ${student.name}!`
  );
}

// function
function timeRemaining(timeElapsed, endTime) {
  return endTime - timeElapsed;
}
var left = timeRemaining(42, 240);

console.log(left); // 198