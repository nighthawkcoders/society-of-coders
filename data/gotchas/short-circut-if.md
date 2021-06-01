---
title: 'Short Circut Conditionals in If statements'
unit: 9
date: '5-25-2021'
author: 'Nathaniel C'
authorLink: 'https://github.com/nathanielCherian'
---

You can "short circut" if statements by combining multiple conditionals with || or &&.

```if( a == b || c == d )```

If ```a == b``` evaluates to true, the entire term will evaluate to true so the second statement, ```c == d``` will not be executed.

Similary in the statement ```if(a == b && c == d)```, if the first term evaluates to false, the entire term is false so the second term is skipped.

This is useful when trying to avoid divide by 0 errors.

```java
int x = 10;
int y = 0;

if(y != 0 && x/y == 0){
    System.out.println(" x / y is 0");
}
```