---
id: javascript-array
slug: javascript-array
title: Array
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [javascript, array]
---

![](https://www.guru99.com/images/1/102319_0559_ArrayinData1.png)

### What is an array?

It's a data structure that stores any data type, e.g., strings, integers, objects, or other arrays. If I explain this to a 5-year-old, it would be like stacking toy blocks on top of one another. Now, I couldn't just remove it if I wanted to get to the bottom block, First In Last Out, or `zero-indexed.` I would have to pull off the previous blocks. 

:::info Reference
[Mozilla Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
:::

### Characteristics:
- Javascript Arrays can contain many types of data all at once.
- JS Arrays __can shrink or grow in size__.
- They are __not associative arrays__, meaning an array's items (or elements) cannot be retrieved using a string. Similar to an Objects key/value pair.

:::warning I'm not sure what this means
- JavaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).
:::

### Constructor

<details>
  <summary><b>Array Constructor</b></summary>
  <div>
    <h3>Syntax</h3>

  ```js
  // literal constructor
  [element0, element1, /* ... ,*/ elementN]

  // construct from elements
  new Array(element0, element1, /* ... ,*/ elementN)

  // construct from array length
  new Array(arrayLength)
  ```

  </div>
</details>

### Static Methods

A `static method` is a function that only belongs to the class and can not be accessed by the instance of that class.

#### Example:
```js
const classOfArr = Array().from("foo")
// expected: ['f','o','o']

const instanceB = Array()
// expected: undefined

instanceB.from()
// expected: undefined
```
<details>
  <summary><b>Array.from()</b></summary>
  <div>
  <p><b>Array.from()</b> lets you create Arrays from:</p>

  <h3>Syntax</h3>

  ```js
  // Arrow function
Array.from(arrayLike, (element) => { /* ... */ } )
Array.from(arrayLike, (element, index) => { /* ... */ } )

// Mapping function
Array.from(arrayLike, mapFn)
Array.from(arrayLike, mapFn, thisArg)

// Inline mapping function
Array.from(arrayLike, function mapFn(element) { /* ... */ })
Array.from(arrayLike, function mapFn(element, index) { /* ... */ })
Array.from(arrayLike, function mapFn(element) { /* ... */ }, thisArg)
Array.from(arrayLike, function mapFn(element, index) { /* ... */ }, thisArg)

  ```  
    
  <h4>Example</h4>

  ```js
    Array.from('foo')
    // expected output: Array ["f", "o", "o"]

    Array.from([1, 2, 3], x => x + x)
    // expected output: Array [2, 4, 6]
  ```
  

  </div>

</details>

:::tip Here are some example on how generate a mock list.
  <hr />
  <h3>Method 1:</h3>

  ```js
  Array.from(["Test", "Test", "Test"], (element, index) => element+index)
  // expected output: Array ["Test0", "Test1", "Test3"]
  ```

  <h3>Method 2:</h3>

  ```js
  Array.from({ length: n }, (_, id) => `user${id}`)
  // expected output: Array ["user0", "user1", "user2"...,"userN"]
  ```
:::

<details>
  <summary><b>Array.isArray(value)</b></summary>
  <div>
  <p><b>Array.isArray(value)</b> verifies the input value is an Array, and returns true</p>

  <h3>Syntax</h3>

  ```js
  Array.isArray(value)
  ```  
    
  <h4>Example</h4>

  ```js
Array.isArray([1, 2, 3]);  // expected: true
Array.isArray({foo: 123}); // expected: false
Array.isArray('foobar');   // expected: false
Array.isArray(undefined);  // expected: false

  ```
  

  </div>

</details>

<details>
  <summary><b>Array.of(element1, element2, ..., elementn)</b></summary>
  <div>
  <p><b>Array.of(element)</b> creates an instance of an array with elements passed to it</p>

  <h3>Syntax</h3>

  ```js
  Array.of(element1, element2, /* ..., */ elementn)
  ```  
    
  <h4>Example</h4>

  ```js
Array.of();           // expected: []
Array.of(1, 2, 3);    // expected: [1, 2, 3]
Array.of({foo: 123}); // expected: [{foo: 123}]
Array.of('foobar');   // expected: ['foobar']
Array.of(undefined);  // expected: [undefined]

  ```
  

  </div>

</details>

### Instance properties

`Instance properties` are attributes of an object. Say we have a Person's class, which will come with __features__ when an instance is created like name, age, weight, and height.

#### Example 
```js {2-5}
  class Person(){
    const name: string;
    const age: number;
    const weight: number;
    const height: number;
  }
```

<details>
  <summary><b>Array.prototype.length</b></summary>
  <div>
  <p>The <b>length</b> property of an object which is an instance of type Array sets or returns the number of elements in that array.</p>

  <h3>Syntax</h3>

  ```js
  const instanceExample = Array(value);
  instanceExample.length
  ```  
    
  <h4>Example</h4>

  ```js
  const instance1 = Array(40);
  const instance2 = Array.of(1,2,3,4,5,7);
  const instance3 = Array.from([1,2,3,4,5,7]);
  const instance4 = Array.from({ length: 100 });

  instance1.length             // expected: 40
  instance2.length             // expected: 6
  instance3.length             // expected: 6
  instance4.length             // expected: 100

  ```

  </div>
</details>

### Instance methods
`Instance methods` are functions of an object. Say we have a Person's class, which will come with __behaviors__ when an instance is created like walk, talk, and jump.

<details>
  <summary><b>Array.prototype.at()</b></summary>
  <p>The <b>at()</b> method accepts an integer value as a parameter, and returns the item or element located at that position.</p>

  <h3>Syntax</h3>

  ```js
  Array.at(index)
  ```  
    
  <h4>Example</h4>

  ```js
  const elementArray = Array.from('foo')
  
  elementArray.at(-1) // expected: 'o'
  elementArray.at(-2) // expected: 'o'
  elementArray.at(0)  // expected: 'f'
  elementArray.at(1)  // expected: 'o'
  elementArray.at(2)  // expected: 'o'
  ```  
</details>

<details>
  <summary><b>Array.prototype.concat()</b></summary>
  <p>The <b>concat()</b> combines two arrays into a single array.</p>

  <h3>Syntax</h3>

  ```js
  Array1.concat(Array2)
  ```  
    
  <h4>Example</h4>

  ```js
  const arr1 = [1,2,3,4,5];
  const arr2 = [6,7,8,9,10];

  const combinedArr = arr1.concat(arr2)
  // expected: [1,2,3,4,5,6,7,8,9,10]
  ```  
</details>