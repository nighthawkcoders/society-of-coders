---
title: 'Objects can access private fields of Objects of the same type'
date: '6-13-21'
class: 'CSA'
section: 5
author: 'Nathaniel C'
---

given the class...

```java

public class Cat {
    
    private String name;
    
    public String getName(){
        return name;
    }

    public boolean sameName(Cat otherCat){
        String othername = otherCat.getName();
        return othername.equals(name);
    }
}
```

The call to ```getName``` within ```sameName``` can be replaced with

```java
String othername = otherCat.name;
```

This would not work if otherCat was declared in a **class other than ```Cat```**.