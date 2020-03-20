// Scope
// 26-01-closure.js

/*
Closure is when a function "remembers" the variables outside of it, even if you pass that function elsewhere.

And there's two parts to this definition that are key for you to pick up. 

Number one, that it is remembering that a function is remembering variables outside of it.


Second part is that it's only closure, we can only observe that as a closure if we take that function and we pass it somewhere. We pass it as a callback argument or we return it, we assign it to some property and pass that object around.

Whenever we treat a function as if it's a value
*/

function ask(question) {
    setTimeout(function WaitASec() {
        console.log (question);
        
    },100);  
}

ask("What is a closure?");  // What is a closure?

/*

Set timeout is creating a function expressed, it's referencing a function expression that has a variable in it, line three the question variable, and that question variable is not inside of waitASec.

It's not a variable that's declared there. 
Where is it created? 

Its created in the outer scope of the function ask. It's specifically that parameter called question. 

Now when we run ask on line seven and we pass in a string, and then we call this setTimeout, immediately after we finish calling the setTimeout before it's actually run, just as soon as we've set up this setTimeout, the ask function has finished.

It's not gonna run anymore, it's completely done. And we would normally think that all of the variables inside of a function go away when a function finishes. So we would normally think that question would just get deleted, it would just get what's called garbage collected. 

But the reason it doesn't is because that timer is still waiting for 100 milliseconds with a function called waitASec in its memory.

And that waitASec function is referencing question, and as a result of that it keeps the question variable, it keeps that scope alive. And that magic, the way that works, that's called closure. It is said that waitASec as a function has closure over the question variable. So that allows us to remember some variable, remember the value that's in that variable, even when our function is gonna get executed in an entirely different place, and sometimes in an entirely different timeline.
*/


function ask2(question2) {
    return function holdYourQuestion() {
        console.log(question2);
    };
}

var myQuestion = ask2('What is closure?');

//..

myQuestion(); // What is closure?