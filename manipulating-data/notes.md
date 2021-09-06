### Manipulating Arrays

#### Transform a string into elements of an array

```
let word = "Manipulation";

console.log(Array.from(word));
/* Expected output 
[
  "M",
  "a",
  "n",
  "i",
  "p",
  "u",
  "l",
  "a",
  "t",
  "i",
  "o",
  "n"
]
*/
```

### Array Manipulation Methods

#### Array.push()

<p>Add an item to the end of the array</p>

```
let techs = ["html", "css", "js"];

console.log(techs.push("nodejs"));
// expected output ["html", "css", "js", "nodejs"]
```

#### Array.unshift()

<p>Add an item at the beginning of the array</p>

```
let techs = ["html", "css", "js"];

console.log(techs.unshift("sql"));
// expected output ["sql", "html", "css", "js"]
```

#### Array.pop()

<p>Remove an item from the end of the array</p>

```
let techs = ["html", "css", "js"];

console.log(techs.pop());
// expected output ["html", "css"]

```

#### Array.shift()

<p>Remove an item from the beginning of the array</p>

```
let techs = ["html", "css", "js"];

console.log(techs.shift());
// expected output ["css", "js"]

```

#### Array.slice()

<p>Get only a few elements from the array</p>

```
let techs = ["html", "css", "js"];

// Syntax array.slice(startPosition, endPosition)

console.log(techs.slice(1, 3));
// expected output ["css", "js"]

```

#### Array.splice()

<p>Remove one or more items at any position in the array</p>

```
let techs = ["html", "css", "js"];

// Syntax array.splice(startPosition, howManyElementsToBeDeleted)

console.log(techs.splice(1, 2));
// expected output ["html"]

```

#### Array.indexOf()

<p>Find the position of an item in the array</p>

```
let techs = ["html", "css", "js"];

let index = techs.indexOf("js");

console.log(index);

// expected output 2

```

