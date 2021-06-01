# How to contribute to Society of Coders
This project is created by community contributions. Creating an post is very simple and takes less than 3 minutes.

## Step 1
Fork this repository.

## Step 2
Create a markdown (.md) file under the section of your article in the [data subfolder](https://github.com/nighthawkcoders/csa-society/tree/main/website/data).
For example if you are a new article to "gotchas" create a new file [here](https://github.com/nighthawkcoders/csa-society/tree/main/website/data/gotchas).

Warning: The filename will be used as a url path so it can only contain chars 'a-z', 'A-Z', '0-9', or '-'.

## Step 3
Copy and paste the following into your newly created file.

```markdown
---
title: 'Put your article title here'
date: 'MM-DD-YYYY'
unit: XX
author: 'Your name' #Optional
authorLink: 'https://github.com/your-github-here' #Optional 
---

Your content in markdown will go here.
```

Tips:
- The name of your markdown file is <25 chars long.
- The title field must be < 70 chars.
- CollegeBoard Units can only go from 1 to 10.
- The body of the article doesn't have to be very long, the more compact it is the better it is for studying.


APCSA Units:
- Unit 1: Primitive Types
- Unit 2: Using Objects
- Unit 3: Boolean Expressions and if Statements
- Unit 4: Iteration
- Unit 5: Writing Classes
- Unit 6: Array
- Unit 7: ArrayList
- Unit 8: 2D Array
- Unit 9: Inheritance
- Unit 10: Recursion

## Step 4
Commit and push your changes and open a pull request to the main repository. It will be reviewed and added to the website.
