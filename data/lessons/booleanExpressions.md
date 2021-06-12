---
title: 'Boolean Expressions and If Statements'
date: '06-12-2021'
class: 'CSA'
section: 3 and 4
keywords: 'unit 3, boolean expression,if'
author: 'Neil Sahai'
---

- If Statement
  - Conditional Flow
  - Helps to establish the control flow of the program
  - Can be used to dictate what processes occur
  - Has two parts - the condition and the desired output of what the statement is going to say
  
Here is a sample if statement

int x = 20;
int y = 18;

if (x > y) {
  
  System.out.println("x is greater than y");
}

Boolean Operators are essential to implementing a conditional statement.
  
| Common Operators | Description |
| ----------- | ----------- |
| &&      | logical and (both need to be true)      |
| ||   | logical or (either needs to be true)       |
| ! | logical not (negate the statement) |
| == | Is equal to (compares values) |
| != | Is not equal to |

| A  | B  | A&&B | A or B | !A  | !B | !(A&&B)  |  !A Or B |
|---|---|---|---|---|---|---|---|
|  T |  T | T | T  |  F | F  | F  | F  |
|  T |  F | F | T |  F |  T |  T |  T |
|  F |  T | F | T  | T  | F  | T  | T  |
|  F |  F | F | F  |  T | T  | T  | T  |

As you can see, some of these conditions can be very difficult to evaluate. 
  - So we can use DeMorgan’s Law to help evaluate these expressions. 
  - What the law states is !TRUE = False and !FALSE = TRUE. 
  - This can help us simplify and get rid of negation. 
  - So !(a&&b) is equivalent to !a || !b and !(a||b) is equivalent to !a && !b
  
  


