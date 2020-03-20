var teacher = 'Kyle';

(function anotherTeacher() {
    var teacher = "Suzy";
    console.log(teacher);  // Suzy
}) ();

console.log(teacher)  // Kyle

/*
row 6:  ()  
That's the immediately invoked part, it's being executed immediately. After we describe that function expression as a value, it immediately invokes it. That's what makes it an IIFE. And the main end result of an IIFE, the main end result of running a function is that we get a new block of scope there.


That allows us to encapsulate some of our behaviors and things so that they don't pollute other parts of the program


We wouldn't want for line eight to print Suzy. We want for line eight to print Kyle. And the way that we protect that assignment on line four from changing it is that we wrap a function around it. That's at least one ways to do so. So IIFEs are a very common pattern, they've been sort of idiomatically around for more than a decade.

http://benalman.com/news/2010/11/immediately-invoked-function-expression/
*/