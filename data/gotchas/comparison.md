---
title: 'Comparison'
date: '06-02-2021'
class: 'CSA'
section: 03
author: 'Alex Titov' #Optional
authorLink: 'https://github.com/alextitov19' #Optional 
---

A common "gotcha" in Java is the comparison of objects using "==" instead of ".equals()" The diffrence between the two is that the first is an operatior
while the latter is a method. The operator "==" checks if both objects point to the same memory location whereas ".equals()" evaluates to the comparison of values 
in the objects. 

Code example:

```java
String s1 = new String("APPLE");
String s2 = new String("APPLE");
System.out.println(s1 == s2);
System.out.println(s1.equals(s2));
```
Result:

```java
false
true
```