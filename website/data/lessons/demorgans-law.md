---
title: 'DeMorgan's Law'
unit: 3
date: '6-1-2021'
author: 'Anthony Vo'
---

DeMorgan's Law is a rule used in computer science to determine whether two conditional statements are equivalent. The rules are as follows:

- !(A && B) is the same as !A || !B
- !(A || B) is the same as !A && !B

This can be used on the AP exam to test for multiple choice questions regarding the equivalence of two conditionals. 

Consider the following code:
```Java
int x = 0;
int y = 10;
int z = 5;

if ((x < 10 && y > 0) || z == 5) { // Line 5
  System.out.println("Valid conditional");
}
```
What other conditional, inserted into Line 5, would make the program run the same as above?

To do this question, you have to break down the conditional into simpler parts. Let's make (x < 10 && y > 0) our A and (z == 5) our B. Since we're trying to find an equivalent conditional, we can set our A and B to !A and !B. !(x < 10 && y > 0) goes to (x >= 10 || y < 0) and z == 5 goes to z != 5. Since we know that !A || !B is the same as !(A && B), we can convert our conditional to !((x >= 10 || y < 0) && z != 5). Finally, since we took the ! of our original expression, we can reconvert our new conditional to ((x >= 10 || y < 0) && z != 5), which is our final answer. Though you could brute force this question by testing values of x, y, and z, this would take too much time and may make your pacing worse.
