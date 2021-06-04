---
title: 'All data fields in a class should be declared private'
date: '6-4-21'
class: 'CSA'
section: 5
author: 'Nathaniel C'
---

In an FRQ (or some mc's), if you are asked to write a class make sure that all variables contained withing the class **are private**. This is standard convention in coding that allows classes to be **self contained**.

Create getter and setter methods to access the variable instead of making it public.

This...
```java
public class Cat {
    
    private String name;
    
    public String getName(){
        return name;
    }

    public void setName(String newName){
        name = newName;
    }

}
```


Note that methods should still be public if they will be used outside of the class.