---
id: javascript-shallow-deep-copy
slug: javascript-shallow-deep-copy
title: Shallow vs Deep Copy
authors:
  - name: Ramsey Gavin
    title: Software Engineer II
    url: https://github.com/rgavin1
    image_url: https://github.com/rgavin1.png
tags: [javascript, array, object, shallow, deep]
---

![](https://miro.medium.com/max/1400/1*600VH4fZWf3oJB2EaZAPjg.png)

:::caution Check this out before reading
 Here's a great video called __[Deep Copying vs Shallow Copying](https://www.youtube.com/watch?v=duyshh9Fs1U)__.
:::

## Shallow Copy

:::info Primative Datatypes

#### What are ___Primative Datatypes___?

- In Javascript, there are __7 Primative Datatypes__: `string`, `number`, `boolean`, `bigint`, `undefined`, `null`, and `symbol`.
- All __primative values__ are __immuntable__, meaning the __values contained in them cannot be changed__.
- This data is __not an object__ or has __no methods or properties__.
    - Javascript has __[Autoboxing](https://developer.mozilla.org/en-US/docs/Glossary/Primitive#autoboxing_primitive_wrapper_objects_in_javascript)__, which gives the appearance of methods and properties.
    - In this example, below it looks like `toUpperCase()` and `length` are methods and properties of the string primitive.

    ```js
    let mystring = "lower case string";
    mystring.toUpperCase();
    console.log(mystring);
    // 'LOWER CASE STRING'
    console.log(mystring.length)
    // 17
    ```

#### Are arrays and object ___Primative___?
- `Arrays` and `Objects` are __not primative values__, they can store primative values, but are not themselves primative.
- Since __arrays and objects are composite__, and __not primative__, if copied, the values are shared with the new object. So if the information or data within that original array structure is changed the values of the new array will also change or update.

#### How are ___Primative___ values treated in memory?
- In the new variable the value is copied from the original variable.

##### Example:

```js
// Using a string method doesn't mutate the string
let bar = "baz";
console.log(bar);               // baz
bar.toUpperCase();
console.log(bar);               // baz

// Assignment gives the primitive a new (not a mutated) value
bar = bar.toUpperCase();       
console.log(bar);               // BAZ

// By contrast, using an array method mutates the array
let foo = [];
console.log(foo);               // []
foo.push("plugh");
console.log(foo);               // ["plugh"]
```
:::

#### Example: `How Shallow Arrays are passed`

```js
let shallowArr1 = [true,null,0.03235401,'tall',100,undefined,'short']
console.log(shallowArr1)
// expected: [true,null,0.03235401,'tall',100,undefined,'short']

let shallowArr2 = shallowArr1
console.log(shallowArr2)
// expected: [true,null,0.03235401,'tall',100,undefined,'short']

shallowArr2[0] = false
console.log(shallowArr2)
// expected: [false,null,0.03235401,'tall',100,undefined,'short']

console.log(shallowArr1)
// expected: [false,null,0.03235401,'tall',100,undefined,'short']
```

### Shallow Copy Methods examples

<details>
    <summary><b>Spread Operator (...)</b></summary>

```js {2}
const a = [123,'Test',false]
const b = [...a]
console.log(b)                  // expected: [123, 'Test', false]
console.log(a)                  // expected: [123, 'Test', false]

// Update Values
b[2] = true
b[1] = 'Updated Test'
console.log(a)                  // expected: [123, 'Test', false]
console.log(b)                  // expected: [123, 'Updated Test', true]
```
</details>

<details>
    <summary><b>Array.<em>from</em>(arrayLike)</b></summary>

```js {2,7,8}
const goats1 = ['jordan','bryant','james']
const goats2 = Array.from(goats1)
console.log(goats1)                 // expected: ['jordan','bryant','james']
console.log(goats2)                 // expected: ['jordan','bryant','james']

// Modify Value
goats2[2] = 'curry'
console.log(goat2)                  // expected: ['jordan', 'bryant', 'curry']
```
</details>

<details>
    <summary><b>Array.<em>slice</em>(0)</b></summary>

```js {2,7-10}
const arr1 = [true,null,"Testing"]
const arr2 = arr1.slice(0)
console.log(arr1)                   // expected: [true,null,"Testing"]
console.log(arr2)                   // expected: [true,null,"Testing"]

// Update Values
arr2[2] = 'TEST 123'
arr2[0] = false
console.log(arr1)                   // expected: [true,null,"Testing"]
console.log(arr2)                   // expected: [false,null,"TEST 123"]
```
</details>

<details>
    <summary><b>Array.<em>concat</em>(array1)</b></summary>

```js {2,7-11}
const cat1 = [123,false,null,undefined,"FOO"]
const cat2 = [].concat(cat1)
console.log(cat1)                   // expected: [123,false,null,undefined,"FOO"]
console.log(cat2)                   // expected: [123,false,null,undefined,"FOO"]

// Update Values
cat2[4] = 'BAR'
cat2[1] = true
cat2[0] = 789
console.log(cat1)                   // expected: [123,false,null,undefined,"FOO"]
console.log(cat2)                   // expected: [789,true,null,undefined,"BAR"]
```
</details>

<details>
    <summary><b>Object.</b><em>create</em>({}, obj)</summary>

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
</details>

<details>
    <summary><b>Object.</b><em>assign</em>({}, obj)</summary>

[MDN Object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create)
</details>

## Deep Copy

:::info Composite Datatypes
What are Composite Datatypes?
Are arrays Composite?
Are objects Composite?
examples
links
:::

What is it?
When to use it?
How to use it?

Examples

Arrays
Objects

Explain it to a five-year-old


What happens when a complex object or array is copied?

What is a shallow object?
- Stores primative values
What is a shallow array?
- Stores primative values

What is a deep object?
- Stores 
What is a deep array?

:::tip Deep Copy Methods
:::