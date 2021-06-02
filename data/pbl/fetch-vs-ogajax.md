---
title: 'Callbacks vs Promises - JavaScript'
date: '06-01-2021'
keyword: 'asynchttp'
author: 'Vihan Jayaraman'
authorLink: 'https://github.com/VihanJ/fetchapi-demo.git' #Optional
---




####Asynchronous Operations: Any operation that is run parallel to the main thread.

Normally, when a statement is executed, the main thread is stopped until that statement is resolved with a return value, or just ends.

![](https://lh3.googleusercontent.com/eKhVPaSp8bh1TCxFVKHJxXHv-LGOeFj3qGgMpz9Zy4xE0NN94gOErq5b9PdSy7VM7rBeD5VgvgM9JS28SU57_NzQgnSjJs3UsCwl1yTj0F63sBBlcIkZYzig-a9r4ojCjkHlmbU3)

However, some functions can take a long time to resolve, and during that entire time, the main thread will be stopped and the user will not be able to use the JS features of the page.

Async operations are useful because they prevent "long" operations from impeding the execution of the rest of the code.

![](https://lh4.googleusercontent.com/ZlHdR1fGueB8D0E18ULSwWmW__wJsg8yc7-Ai5fhFXAjdCz9TbcDY5fHR_FHThjTgWmydRk1NoZYMg5buCLfXa8bhBhotMleT-AbinW69-N9c0JID5RnB4dnP9L78tKplQuJ71ff)

Function2 is async, so runs parallel to the main thread - While it is carrying out its own delay on the parallel thread, the main thread doesn't experience the delay and executes the next statements

This is why the 2 would come last.

### Defining Async Functions

We use the async keyword in front of a function to mark it as asynchronous

The await keyword identifies that the program should wait for another async function to resolve before doing any assignment or returning.

![](https://lh4.googleusercontent.com/2JwSZd3A_1_tL5S2vqlwYztJA5b6PPNln_EHfvc4l0y2IIbeOXG1h26BYi5imDBcr6o0ka2mpsNak21w2NhMchzpEq7zvjN2_xa-RBn35wSf7iRbdLQsTMwN_dIgVYeNKiMm2fC8)

If we assign a variable to the return value of the async function, the program won't wait for the async function to finish (which was the whole point of async in the first place), so it'll just assign a null value if it needs to.

This is why we need the await keyword for assigning variables to the output of async functions

There is a similar problem for functions that rely on the output of async functions, because they will receive a null value instead of the correct value if they don't wait for the function to finish.

We need to create callback functions, which are code blocks that ONLY fire when the async function returns a result, which we can then manipulate.

If we want to provide an anonymous function as a callback, we can do as such:

### HTTP and Async???

When we need HTTP data, it is likely that the request will take a relatively long amount of time to resolve, so we should make HTTP requests an asynchronous operation.

However, using callback functions with HTTP requests can quickly become messy.

We will show alternatives to callback functions.

![](https://lh5.googleusercontent.com/l86WXz-VQxHA4b7EC4R_CIx9TyPyLLILCU4hvkPsda94SZDkaV450hFk2c1cS-ZZbTv2LI4gbqg0w85LVFtw0-VqspGaWl0cbFGymRQQUb-A2K6igCwvL7ABsBF6u7mEK5xCiTDp)

#####OG - AJAX - Subject to "Callback Hell"

Sample Code:

![](https://lh5.googleusercontent.com/ryClUCN4ThaU9et9Hzpy_EESWOtTTBhODNKQ6sBXS7AB2-uQ0pKBlJMfNPUnsjqjM5PgYzjqvJ4eG9lOwZfndxyJ5I6GJyzKFs8KYjKRK0xkC2HjJGjvleVt9YDY8b3ySiBHoRaZ)

This code works well enough when sending data and specifying the method and url.

However, writing callback functions can get very unreadable because each function has to be nested within the parent function.

Call-Back Hell Example:

![](https://lh6.googleusercontent.com/ZWqr1KXRYackvfHMZheoNQDO1hKaUBQ8dKkiT8JlRFmn9zrtcyhfNn77R1WXsLxCZvnKimUDSe8y0nKKeOxX0FcfG-Ws7gp61s7oPS0opQ0zEuU2ZNZJHIX370N-CM-7y20NTiOq)

####Fetch and Promises - Reduces callback hell with Promises

Promises:

<https://javascript.info/promise-basics>

Promise - an object that returns the value of the asynchronous function supplied to it

A promise provides certain handlers and methods for dealing with the asynchronous nature of the request, to reduce callback hell.

####Basic Promise Chain:

ex. Function1 - returns a promise as part of its code

![](https://lh4.googleusercontent.com/srwOdIjYFjvSgty6L0C-R_almQrNprmw8bNaefScS6P6lJtqDp2Zhfl1uE70iuw5XVEIwqgOs91Ci1li4JPc6VQT7uazvPKSnb0cysozFQqvzz9JDmm_yup1alpZUELcjlvLzJso)

This is much more readable than callback hell

####Fetch with Promise Chains:

One common tool is the Fetch API, which initially returns a promise, which can then be handled by a promise chain

![](https://lh6.googleusercontent.com/PlSwHQsOVRf4cB_vDu543cN5TgKwuGtaOS3lqhAbumK87_XkRDAY1j-jOAknRAQn_56GTygHFBYauoChsqVuZuXQQXdoBHi_pnAUT1v9oP68g32u1I-EMMNy7O4m1q6_o95_kMC3)

### Conclusion:

HTTP requests with the fetch api, or any other API that uses promises, are much more readable than legacy request systems like XMLHTTPRequest(), because they eliminate callback hell with promises.

So, you may want to consider using fetch api over XMLHTTPRequest(), as fetch have much the same features, and using fetch or other modern apis (that use promises) results in more readable code.
