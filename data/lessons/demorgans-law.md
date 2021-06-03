---
title: "DeMorgan's Law"
class: 'CSA'
section: 3
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

- Step 1: Set (x < 10 && y > 0) to A and (z == 5) to B. 
- Step 2: Set A and B to !A and !B. 
- Step 3: !(x < 10 && y > 0) goes to (x >= 10 || y < 0) and z == 5 goes to z != 5. 
- Step 4: Demorgan's Law states that !A || !B is the same as !(A && B); set conditional to !((x >= 10 || y < 0) && z != 5). 
- Step 5: Remove the !, as we used it in the first step
- Final answer: ((x >= 10 || y <= 0) && z != 5) 

Though you could brute force this question by testing values of x, y, and z, this would take too much time and may make your pacing worse.
