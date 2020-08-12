## Welcome to the Propel School Blog

To contribute to the Propel School Blog please follow the instructions below. 

Fork the repo 

Clone the forked repo
`git clone https://github.com/<your-username>/blog`

Create a new branch from the latest master branch
`git checkout -b <your-name-article-name>`

If your contributing for the first time create an authors profile

- Add your avatar
Go to `content > authors > authors > avatars`
Add a square headshot typically `250px X 250px OR 400px X 400px OR 500px X 500px`
Name the file `firstname-lastname.{jpg/png}

In the authors directory create a `<firstname>-<lastname>.yml` file with your details`. Example
```
name: Ronij Pandey
bio: |
  Ronij Pandey | Fellow Jul 2020 Cohort
avatar: ./avatars/ronij-pandey.jpg
social:
  - url: https://twitter.com/ronij2508

```
Create a new directory under `content > posts` in the format `yyyy-mm-dd-<name-of-post>`

Create a new file called  `index.md`

Add meta details of the post to the `index.md` file. 

```
---
title: Object-Oriented Programming in Java
author: Ronij Pandey
date: 2020-07-14
hero: ./images/robots.png
slug: object-oriented-programming-in-java
excerpt: In this article, we will explore the various concepts related to OOP.
---
```

Write your post


Add any images required for the project in the same directory as shown in the example content directory

You can test locally if you have NodeJS installed

`yarn`
`yarn run dev`
Check if the blog post is live at 

`localhost:8000/<slug>`

####   If you get stuck or aren't sure of the structure examine the `example-content` directory to understand how to add posts and author profiles.

Once you're done please go through the following checklist

- [ ] This is an original article written by you and not copied from elsewhere on the internet.  
- [ ] You have permission to use any images referenced in the article with due credits given.    
- [ ] Proof read for typos.  
- [ ] You have added the author avatar.  
- [ ] You have added the author bio.  
- [ ] Followed directory and file naming conventions.  
- [ ] Have added slug to the meta details of the post.  
- [ ] Slug is in small letters `name-of-the-article`.  

Push your branch to your repo and open a pull request. 
