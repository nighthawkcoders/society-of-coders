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
Multiple classes can be defined as `@Controller` in which web routes are defined as methods of that class. Defining routes in multiple classes allows for organization as well as more efficient state management. For multiple pages where a logged in user persisted, the user id could be stored as a instance variable of the controller.
``` Java
@Controller
public class WebsiteInformationController {
    private int userId
    /*
        web routes defined here
    */
}
```
Annotations are also used to signal that the defined method is a web route. The return type of these methods are always `String`, as the method will return the HTML page to render or a direct return value such as JSON. GET requests (initial page rendering) and POST requests (page is updated based on user interaction) are represented respectively as `@GetMapping` and `@PostMapping`.
``` Java
@GetMapping("/about")
    public String about() {
        return "info/about"; // directory path inside of templates to HTML document
    }
```
The practical use of `@GetMapping` and `@PostMapping` can be seen practically when in tandem with ThymeLeaf (Python: Django), the HTML templating of choice for this example. To pass data to ThymeLeaf, the `Model` type must be used (note `Model` is a Spring type, thus it will work with any templating engine). The `Model` is the gateway to pass data or entire Java objects to HTML. An object of `Model` acts as a container for all of the data which is then accessed in the HTML document. The code segment below demostrates how a Java object can be stored in a model object passed as parameter.
``` Java
@GetMapping("/listPeople")
public String listEveryone(Model model) {
    Person rupert = new Person("Rupert", "Kerr");
    Person clive = new Person("Clive", "Buckley");
    
    model.addAttribute("personName", rupert.firstName); // only saves the first name stored in rupert
    model.addAttribute("personObj", clive); // saves entire Java object, where both attributes of the Person class are accessible 
    
    return "person/peopleTable";
}
```
Inside of the HTML document, two values will be accessible that were passed from Java.
1. `personName` which holds a single raw `String` "Rupert"
2. `personObj` which hold a `Person` object with both attributes "Clive" and "Buckley" accessible using the same getter methods as Java
