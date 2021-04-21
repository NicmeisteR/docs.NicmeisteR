---
slug: node-essentials
title: Node-Essentials
author: Nicolaas Nel
author_title: Lead Front End Product Developer @ InfoSlips
author_url: https://github.com/nicmeister
author_image_url: https://avatars.githubusercontent.com/u/20286714?v=4
tags: [node-essentials, npm, node]
---

# Intro 🐱‍💻
Late last night I decided to finally publish my very own npm package, it's something I've wanted to do for a while now and I could never decide what to package.

While brainstorming I was busy working on a node.js app to process some data, the same code I've used in several projects.

This was it, the perfect package. I don't like searching for stuff I've already used and will use again in the future so I decided to package my most used node functions into a lightweight npm package.

To my surprise in under 10 hours it already hit over 800 downloads!🥳


# About Node-Essentials 🐱‍🏍
This is a nodejs toolkit for doing asynchronous api calls, writing files to the system, starting up express-js servers and more coming soon.

## Setup 🚧
Run:
> npm install node-essentials

And include it in your app:
```javascript
let node = require('node-essentials');
```
<br/>

# Current Tools ⚙
### <b>writeToFile</b> - Writes anything passed through to storage as any file.  
The below sample is used to print out json data from an API call.
```javascript
    node.writeToFile("tests", "writeToFile", "json", JSON.stringify(data));
```
<br/>

### <b>express</b> - Set up an express-js server on the specified port and directory.
The "__dirname" is the relative path for the directory used by node and 3000 is the port it will serve to this is also the default express port.
This would serve the current root directory.
```javascript
    node.express(3000, __dirname);
```
<br/>

### <b>get</b> - A simple Async REST "get" request. 
I will be adding more rest functions soon.
```javascript
    async function get() {
    try {
        test = await node.get(
            "https://apiurlhere.com/",["api key desc", "api key value"])
            .then(console.log("done"));
    }
    finally {
        console.log(test);
    }
};
```
# Conclusion 🏁
The package contains functions I commonly use, I will be adding more simplified essential tools/functions as time goes on!

It's been an interesting journey making my first package and any feedback/suggestions of functions to add would be welcomed.

## Where to get the package

[NPM](https://www.npmjs.com/package/node-essentials)
[Github](https://github.com/NicmeisteR/Node-Essentials)

If you want to keep track of all my projects and endeavors I am super active over on [Twitter](https://twitter.com/FinalNecessity) and I'm always happy to give advice and lend some help.

[FinalNecessity on Twitter 🍣](https://twitter.com/FinalNecessity)

