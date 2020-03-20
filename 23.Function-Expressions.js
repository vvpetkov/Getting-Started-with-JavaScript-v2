
// anonymous function expressions 

var clickHandler = function() {
    //..
}

// named function expressions 
var keyHandler = function keyHandler() {
    // ..
}

// Abstraction:
// better use NAMED function expressions
// why:
// their descriptive name tells us what they're doing


// arrow functions is anonymous 

var ids = people.map(person => person.id);

var ids = people.map(function getId(person){
  return person.id;
});

// not big fan to arrow function same reason 