#### Function is a blender

<p>
  Functions look like a blender in the sense that I can pour everything into the cup (via function parameters). The content is processed (in the scope of the function) and then may (or may not) return some result. But even if it is not returned, something will always be changed!
</p>

Example:

```
function makeJuice(fruit1, fruit2) {
  return `Juice off ${fruit1} + ${fruit2}`;
}

const cup = makeJuice("banana", "apple");

console.log(cup);
```

#### Function scope

<p>
  A case of function scope can be seen in the following example:
</p>

```
let subject = "create video";

function createThink(subject) {
  subject = "study";
  return subject;
}

console.log(subject); // returns 'create video'
console.log(createThink(subject)); // returns 'study'

```
<p>
  This is due to the fact that the variable "subject" exists in two different scopes. The global scope (main application) is the scope of the "createThink" function that belongs only to itself.

  Therefore, when the function is called, it reassigns the value of the variable received through the argument given to the call, but that reassignment only exists in that scope and when returning the value, the variable subject continues to have the same value 'create video' and no longer 'study'. In other words, 'study' is just the return of the function.
</p>

<p> 
  In the example below, we have a somewhat different case which causes a bit of confusion.
</p>

```
let subject = "create video";

function createThink() { // removed parameter
  subject = "study";
  return subject;
}

console.log(subject); // return create video 
console.log(createThink(subject)); // return study
console.log(subject); // return study

```

<p>
  In this case, in which the function's 'subject' parameter no longer exists, the executed code will print 'create video' first (due to the order in which the codes are executed), however, in the execution of the createThink function, the declared variable in the global scope, it is reassigned with the value 'study' and when returned by the function, its value no longer returns to the previous state of 'create video'.

  Therefore the scope of the function has direct action on the global scope of the code. It is important to pay attention to the fact that it is no longer a return of a function, but a reassignment of the global variable as well.
</p>

#### Function hoisting

<p> 
  In cases like the one below. JavaScript uses a feature called "function hoisting" which is like the code was reorganized raising the function to the top of everything.
</p>

```
sayMyName();

function sayMyName() {
  console.log("Chris");
}
```

<p> 
  In cases of anonymous functions associated with 'const' variables, they do not suffer from the hoisting effect, thus generating a "ReferenceError: Cannot access 'sayMyName' before initialization" error. Or even using var (which you can use from hoisting) the following problem will happen.
</p>

```
var sayMyName; // starts with undefined

sayMyName(); // Error = TypeError: sayMyName is not a function

sayMyName = () => { // baaaad, the code is broken
  console.log("Chris");
};
```

<p>
  Hoisting will elevate the variable, but initialize with undefined. And in the step where the function is called, baaaaaaad. The code broke
</p>

#### Arrow Functions

<p>
  An arrow function expression has a shorter syntax when compared to a function expression and does not have its own this, arguments, super, or new.target. These function expressions are best applied to functions other than methods, and they cannot be used as constructors. (MDNWeb Docs References)
  
  In general it is a function like any other in javascript, however it is a more modern way of writing functions. This feature that came with the implementation of ES6.
</p>

```
// Standard and common form

  function sayMyName() {
  console.log("Chris");
}

sayMyName();

// Modern shape using arrow function

const sayMyName = () => {
  console.log("Chris");
};

sayMyName();
```

#### Callback function

<p>
  A callback function is a function passed to another function as an argument, which is then invoked inside the external function to complete some kind of routine or action.
</p>

```
function sayMyName(name) {
  name();
}

sayMyName(() => {
  console.log("I'm in a callback");
});
```
