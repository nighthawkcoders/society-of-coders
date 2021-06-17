---
title: 'Lists'
date: '6-16-2021'
class: 'CSP' # CSA or CSP
section: 2 # A number to represent Unit or Big Idea (optional for pbl)
keywords: 'lists, data' # Keywords to describe your project seperated by commas
author: 'Kira Liao' # Optional
---

**What does a list do?**
- Stores multiple pieces of data in a single variable
- Lists group objects and allow for functions to be applied to every object
- List are useful when using similar, organized data
  - Ex: fruits = [apple, peach, banana]

**What makes up a list?**
- Notated by two brackets around a set of “indices”
- Indices are the values stored in a list (ie: “keyboard”, mouse, monitor)
- Indices separated by commas
- A list is set equal to a variable
```
list1 = [1, a, “b”]
```
In this example, "list1" is the variable the list is set equal to. The indices are 1, a, and "b". 

**Calling a List**
- *College Board has 1 as the starting value,* but most other languages (including python) have 0 as the starting value
- Using a for loop allows allows for every value in a list to be called
```
  for item in ratings:
      ratinglist.append({'id':item.id, 'game':item.game, 'stars':item.stars, 'review': item.review, 'user': item.user})
```
In this example, every value in the list is called and the same action is performed on it.

**Manipulating a List**
“Append” is used to add a value to the end of a list
```
list2 = [“a”, b, c, 1, 2, 3]
list2.append(value)
list.append(4)
```
New list: [“a”, b, c, 1, 2, 3, 4]

“Remove” deletes a specific index in a list
```
list2 = [“a”, b, c, 1, 2, 3]
list_name.remove(index_number)
List.remove[1]
```
New list (collegeboard): [“b”, c, 1, 2, 3]
New list (python): [“a”, c, 1, 2, 3]

“Reverse” reverses the order of a list
```
list2 = [“a”, b, c, 1, 2, 3]
list_name.reverse
```
New list: list2 = [3, 2, 1, c, b, “a”]



