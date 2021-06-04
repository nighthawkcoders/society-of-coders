---
title: 'Truth Tables'
date: '6-13-21'
class: 'CSA'
section: 8
author: 'Nathaniel C'
---

You may see problems that give an expression such as ``` a && (a || b) ``` and asks you questions about possible outcomes. Although this problem is simple enough to be thought about logically, other problems may be harder and more time consuming to figure out.

A better solution is to use a truth table. Plug in all possible values for both of the variables and keep note of their output. This brute-force approach may seem like it takes a long time but it can actually be easier than trying to figure out the logic behind the statement in some cases.

Here's an example:

| A | B | Outcome |
| ----------- | ----------- | ----------- |
| ```true``` | ```true```| ```true``` |
| ```true```   | ```false```| ```true``` |
| ```false``` | ```true```| ```false``` |
| ```false```   | ```false```| ```false``` |

This simple strategy showed us that the outcome is true **only** when A is true.