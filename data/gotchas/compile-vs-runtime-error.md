---
title: 'Compile-time vs Run-time errors'
date: '6-2-2021'
class: 'CSA'
unit: 5
author: 'Nathaniel Cherian'
authorLink: 'https://github.com/nathanielCherian'
---

You will have to know the different types of java errors: compile time and runtime.

Compile time errors prevent your code from even being compiled (think typos).

```java
/*
  Examples of Compile-Time errors
*/

// typo in "void"
public voids errorHere() ...

// wrong return type
public int thisReturnsInt(){
  return "string instead";
}

// Declared the same variable twice
int temperature = 22;
String temperature = "Hot Outside";
```

Run Time errors on the other hand don't show up when you try to compile your code, instead they occur when you try to perform an illegal action.

```java
/*
  Examples of Run-Time errors
*/

// Divide by 0 error
int x = 1; int y = 0;
x = x / y;

// Array index out of bounds
for (int i=0; i<arr.length; i++){
  arr[i+1] = arr[i] + 5;
}

// String out of bounds error
String s = "apcsa";
s.substring(0, s.length+1);

```

In summary, a compile-time error can be found by looking for java-syntax problems in the code while a run-time error can be found by looking for logical errors.
