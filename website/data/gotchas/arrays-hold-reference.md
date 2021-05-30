---
title: 'Arrays hold their reference when being passed to functions'
date: '5-25-2021'
author: 'Nathaniel C'
---

If you pass an array as a parameter to a function, then you are actually passing is a *reference* to the where the array is stored.

This means that if you perform an operation on the array within the function, the changes will be reflected on the original array.

```java
int[] array = {0, 1, 2, 3, 4};


public void changeIt(int[] arr) {
    arr[0] = -1;
}

changeIt(array);
System.out.println(array); // {-1, 1, 2, 3, 4}
```

Note that if you reinitialize the array, you lose the reference.

```java
int[] array = {0, 1, 2, 3, 4};


public void dontChangeIt(int[] arr) {
    arr = new int[5];
    arr[0] = -1;
}

dontChangeIt(array);
System.out.println(array); // {0, 1, 2, 3, 4}
```
