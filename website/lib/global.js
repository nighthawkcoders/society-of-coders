// All global constants

// List of classes and metadata
export const CLASSES = [
    {title:"CSA", path:"csa", url:"/csa", topics:["gotchas", "lessons", "tricks"]}, 
    {title:"CSP", path:"csp", url:"/csp", topics:["gotchas", "lessons", "tricks"]}];

// Get class by class name
export const CLASS_BY_NAME = {"CSA":CLASSES[0], "CSP":CLASSES[1]};

// Get different topics pertaining to different classes
export const TOPIC_BY_NAME = {
    "gotchas":{
        title:"Gotchas",
        description:[
            "Beyond the basics of Java, there are many hidden nuances in the language that you can be tested on.",
            "Stay ahead of the curve and be confident in your answers by going over some commonly missed aspects of Java."
        ]
    },

    "lessons":{
        title:"Lessons",
        description:[
            "Learning the fundamental algorithms and techiques is vital to mastering Java.",
            "The best way to learn is to practice by following along with your own compiler and trying out the code for yourself."
        ]
    },

    "tricks":{
        title:"Tricks",
        description:[
            "Lorem ipsum number 1.",
            "Lorem ipsum number 2."
        ]
    }
}