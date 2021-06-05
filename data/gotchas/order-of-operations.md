---
title: 'Order of operations'
date: '6-4-21'
class: 'CSA'
section: 1
author: 'Nathaniel C'
---

Just like in math there is an order of operations for Java. This is tested frequently and can be easy points. 

The (tested) order of operations for java is...
1. Anything in parenthesis
2. Type casts
3. Division, Multiplication, Modulo (in no particular order)
4. Addition, subtration (in no particular order)

Lets decompress the following expression.
```java
int num = (int) (2.5*3+4)%5-6;
```
Step 1: find term in parenthesis (2.5*3+4)
Step 2: Multiplying double and int results in double 7.5 + 4 = 11.5
Step 3: Typecast will convert to int, **takes precedence over modulo**, 11%5-6

The equation is now ```11%5-6```

Step 3: Modulo comes first 10%5 = 1
Step 4: 1 - 6 = **-5**



