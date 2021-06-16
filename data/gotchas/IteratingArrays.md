---
title: 'Iterating Arrays'
date: '06-16-2021'
class: 'CSA'
section: 06
author: 'Neil Sahai' 
---

- A common gotcha in CSA Multiple Choice and FRQ often involves when you iterate through arrays.
- In java, Arrays start at 0 and go up to the size of the Array - 1. 
- As a result, this can lead some students to get confused and call an array up to the size of the array
- This causes the program to iterate over something which doesn't exist, causing an ArrayIndexOutOfBounds Exception

- Take a look at this example.

```java
public class NewClass2
{
    public static void main(String[] args)
    {
        int ar[] = {1, 2, 3, 4, 5};
        for (int i=0; i<=ar.length; i++)
          System.out.println(ar[i]);
    }
}
```
- See how we created an array with 5 values? This tells us that when we call ar.size; it will return the size of the array which is 5
- However, take a closer look at the for loop. What this for loop is telling us is that for values of 0 to 5, it will print out the value that is stored at that index

- You may expect the output to be something like:

```java
1
2
3
4
5
```

- But in reality, it is going to throw an ArrayIndexOutOfBounds Exception.
- Why?
- Lets take a look at each of the calls. Notice how we start at the 0, and the for loop

```java
System.out.println(ar[0]); // This will print out the value at index 0, which is 1. The for loop then increments by 1 which is still less than or equal to 5, or the length of the array
System.out.println(ar[1]); // This will print out the value at index 1, which is 2. The for loop then increments by 1 which is still less than or equal to 5, or the length of the array
System.out.println(ar[2]); // This will print out the value at index 2, which is 3. The for loop then increments by 1 which is still less than or equal to 5, or the length of the array
System.out.println(ar[3]); // This will print out the value at index 3, which is 4. The for loop then increments by 1 which is still less than or equal to 5, or the length of the array
System.out.println(ar[4]); // This will print out the value at index 4, which is 5. The for loop then increments by 1 which is still less than or equal to 5, or the length of the array
System.out.println(ar[5]); // Uh oh! There is no index 5, leading the program to throw an index out of bounds error.
```

- Well now how do we fix this issue?
- An easy way to fix this problem would be by changing inequality in the for loop by using less than instead of less than or equal to.

```java
public class NewClass2
{
    public static void main(String[] args)
    {
        int ar[] = {1, 2, 3, 4, 5};
        for (int i=0; i<ar.length; i++)
          System.out.println(ar[i]);
    }
}
```

- By changing this to a less than sign, the for loop will iterate up to 4, but not 5 since 5 is not less than 5. 
- The causes the program to not call the index that does not exist
- Paying attention to the inequalities in the for loop and good luck!
