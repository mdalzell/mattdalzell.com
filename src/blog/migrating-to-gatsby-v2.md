---
title: "Migrating to Gatsby v2"
date: "2018-10-22"
tags: ["gatsby.js"]
---
This past weekend, I took the time to upgrade this site from Gatsby v1 to v2.  Generally I like to keep up with new releases for my side projects, and there are some [cool features](https://www.gatsbyjs.org/blog/2018-09-17-gatsby-v2/) in v2 that further justified the upgrade (read: the "ludicrous mode" hot reloading is pretty boss).

Overall, the migration process went pretty smoothly thanks to Gatsby's excellent documentation. In terms of code, not much had to change.  One of the most noticeable differences is the removal of the special layout file in favor of using a normal React component.  I totally understand the design decision to follow standard React patterns instead of relying on a convention unique to Gatsby.  The scope of this was fairly minimal for my site though; I'd probably be a little more frustrated if I had a significant number of distinct pages.

There was one "gotcha" for me during the migration, because nothing can ever go perfectly.  With the layout now handled by a regular component, the old data prop was removed in favor of Gatsby's new StaticQuery feature.  Everything worked as expected in develop mode, however when built for production the graphql query failed and the text "Loading (Static Query)" was injected into the DOM.  After a bit of hair pulling, I noticed that this was an [open issue](https://github.com/gatsbyjs/gatsby/issues/8790) on GitHub, and fortunately there was a workaround available.

All in all, certainly not the worst migration experience I've ever had in my career (looking at you Sitefinity).  The good folks behind Gatsby certainly deserve some praise for minimizing breaking changes and most importantly delivering clear documentation to guide poor souls like myself along.