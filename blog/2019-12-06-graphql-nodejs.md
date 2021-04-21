---
slug: graphql-nodejs
title: GraphQL - NodeJS
author: Nicolaas Nel
author_title: Lead Front End Product Developer @ InfoSlips
author_url: https://github.com/nicmeister
author_image_url: https://avatars.githubusercontent.com/u/20286714?v=4
tags: [graphql, npm, node]
---

# Intro

For a while now I've wanted to jump into the deep end of GraphQL and see what all the fuzz is about.

And oh my I wish I did it sooner.

## So, what is it?

GraphQL is A query language for your API, this gives you the ability to ask for exactly what you need from the API and nothing more.

## Why should I use it?

This is something that works amazing for big API's like the Halo 5 Game API that I used in my example.

A normal player has about 20 000 lines of data but for most of the calls I make I only use a fraction of that (24 to be exact). Reducing my calls to only get what I need gives me a big performance bonus and I'm able to use less data on the client side.

Returning a smaller JSON object makes coding on the front end a lot easier than previously.

```javascript
// Sample of Possible Queries
let queryObjectSample = {
    Gamertag: String,
    Xp: Number,
    SpartanRank: Number,
    HighestCsrAttained: {
      Tier: Number,
      DesignationId: Number,
      Csr: Number,
      PercentToNextTier: Number,
      Rank: Number
    },
    Stats: {
      TotalKills: Number,
      TotalHeadshots: Number,
      TotalMeleeKills: Number,
      TotalAssassinations: Number,
      TotalGroundPoundKills: Number,
      TotalShoulderBashKills: Number,
      TotalPowerWeaponKills: Number,
      TotalDeaths: Number,
      TotalAssists: Number,
      TotalGamesCompleted: Number,
      TotalGamesWon: Number,
      TotalGamesLost: Number,
      TotalGamesTied: Number,
      TotalGrenadeKills: Number,
      TotalSpartanKills: Number,
    },
    TotalTimePlayed: String
}

```

Here is a sample of what I return opposed to the 20 000 fields:

```json
{
    "data": {
        "Gamertag": "NicmeisteR",
        "HighestCsrAttained": {
            "Csr": 1872,
            "Rank": 78
        },
        "Stats": {
            "TotalKills": 34834,
            "TotalDeaths": 31017
        }
    }
}
```

To get the above data all I have to do is make an API call to my Express NodeJS server and with the below query to retrieve what I need.

```javascript
var dataString = {
    "query": 
        `{ 
            Gamertag, 
            HighestCsrAttained {Csr, Rank},
            Stats { TotalKills, TotalDeaths} 
        } 
`};
```

## How to get started
Go over to [GraphQL](https://graphql.org/code/) and select your language of choice and follow through with the tutorial. 

GraphQL is super scalable and flexible.

Alternatively you can also check out my Github Repository [GraphQL-NodeJS](https://github.com/NicmeisteR/GraphQL-NodeJS) to get straight into the action and see how it all comes together.

## Conclusion

GraphQL is something I would high recommend checking out, although it's still relatively new a lot of employers are on the lookout for people with knowledge around it. 

Check out the repository for the project here: https://github.com/NicmeisteR/GraphQL-NodeJS
