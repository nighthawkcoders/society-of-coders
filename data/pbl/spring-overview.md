---
title: 'Spring & ThymeLeaf Overview'
date: '07-08-2021'
class: 'CSA*'
section: Spring
keywords: 'java, spring, html,'
tech: 'Java, HTML, Spring, ThymeLeaf, Hibernate, MySQL'
author: 'Michael Hayes'
authorLink: 'https://github.com/mhayescs19' 
---
## Spring Framework
Spring allows a Java class to be transformed to manage web routes through class methods. Using expanded annotations (more powerful than @Override), entire classes can be categorized. These annotations are key to interact with key properties of the Spring framework. In code, the ``@SpringBootApplication`` annotation is placed above the main class to signal the entry point for the application. Take a look at the aforementioned code in context:
``` Java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class Main {
    public static void main(String[] args) {
        SpringApplication.run(Main.class, args);
    }

}
```
