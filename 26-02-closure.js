function ask(question) {
    return function holdYourQuestion() {
        console.log(question);
    };
}

var myQuestion = ask('What is closure?');

//..Somewhere later in the program, if I execute that function, it's still knows what the contents of the question variable.

myQuestion(); // What is closure?



/*
Here's another example. Not passing a function as an argument callback like we did in the previous slide, but here we're gonna return back a function. So I call the ask function passing in what is closure as a string, and what I get back, line seven I assigned to the variable my question.


I'm assigning that function expression as a value. I'm assigning it to this variable called my question on line seven. Somewhere later in the program, if I execute that function, it's still knows what the contents of the question variable. And the reason it knows the contents of the question variable is because of closure.


It had closure over that variable, it preserved access to that variable, and it was able to use that at a later time or in a different place of the program.
*/

