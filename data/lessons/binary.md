---
title: 'Binary (converting from binary to decimal)'
date: '6/14/2021'
class: 'CSP' 
section: 2 
keywords: 'binary, data' 
author: 'Kian Kishimoto' 
authorLink: 'https://github.com/Uhpachee' 
---

All data is stored in bits, which are just 1's and 0's. These bits can make up a form of information called "binary". 
Binary is a base-2 counting method (0,1), which is different form the conventional decimal form, which is base-10 (0-9).
A binary bit is a single digit (eg. 1 or 0) while a binary byte is 8 values (eg. 1011010).
We can convert from binary to decimal by doing the following:
Since binary is in base-2, each value represents a power of 2. The key is down below:

```
0   0  0  0  0 0 0 0
128 64 32 16 8 4 2 1
```

As you can see, each value represents the next power of 2, starting with the 0th power, going from right to left.
To convert from binary to decimal, you add the numbers which have a 1, and ignore the ones that have a 0.

For example, here is the conversion of the binary number 01010101:
1. We can start with lining up the values to their corresponding powers of 2

```
0   1  0  1  0 1 0 1
128 64 32 16 8 4 2 1
```

2. Now we can ignore the 0's

```
1  1  1 1
64 16 4 1
```

3. Finally, we add up the bottom numbers

```
64 + 16 + 4 + 1 = 85
```

From this, we can see that the binary number 01010101 converted do decimal is 85.


For more on this topic (binary), visit CollegeBoard and go to Big Idea 2. The first section is called "Binary Numbers" and there should be videos to help you with additional information.
