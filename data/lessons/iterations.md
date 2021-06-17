---
title: 'Iterations'
date: '6/15/2021'
class: 'CSP' 
section: 3 
keywords: 'iterations, loops' 
author: 'Kian Kishimoto' 
authorLink: 'https://github.com/Uhpachee' 
---

Iterations are just a way of repeating a block of code or going through a set of conditions multiple times.
They can be used in a variety of ways, for example querying/searching for a specific value or for reducing the length of code.

Here's an example of what a general iteration could look like:

<p align="center">
  <img src="https://cdn.discordapp.com/attachments/784488744061108236/854535091224444958/unknown.png" />
<p>

In the example above, the two statements underneath the condition will keep repeating until the output of the condition above is true.
Usually the condition in a loop like this will have a variable that has to be a certain number, and one of the statements is either adding or subtracting 1 from that variable.
For example:
  
```
number = 0
REPEAT UNTIL number > 14:
  print("Not done yet...")
  number = number + 1
 
print("I finished!")
  ```

In the code above, the statement "Not done yet..." will be printed over and over until the number variable reaches 15, where it will then print the statement "I finished!"
Since the repeated code adds 1 to the number variable every time, the code inside will run 15 times, so the output will show the string "Not done yet..." 15 times, followed by the string "I finished!".

A simpler type of iteration is a fixed iteration. Instead of using an example, the code can just state how many times to repeat:
  
```
REPEAT 5 TIMES:
  print("A")

print("B")
```
  
In the example above, the code will print A 5 times and then B into the terminal.
For more information on this topic visit CollegeBoard and go to Big Idea 3. The videos should be under topic 8.
