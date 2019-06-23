---
title: Saving Time with Netlify CMS
date: 2019-06-24T01:42:19.460Z
tags:
  - Gastby
  - Netlify CMS
draft: false
---
When I first set out to blog about my experiences in software development, my goal was to have a new post out about every two weeks. In typical engineer fashion, I think I underestimated how long it would take to deliver that content. It seems like I've fallen into a pattern of writing a new post every month, if that.

The most difficult part of writing blog posts is purely creative; coming up with material to write about is hard. However I noticed that even when ideas struck, I would not get around to manually updating my Gatsby site with another markdown file quickly enough to capture those thoughts. In the interest of removing as many barriers to writing as possible, I decided to add [Netlify CMS](https://www.netlifycms.org/) to manage my posts.

Every web developer probably has some CMS horror stories, and I have no intention to use some heavyweight content management system for what I intend to be a minimalist site. However I was aware of Netlify CMS's Gatsby plugin, so I decided to give it a shot. I wound up being pleasantly surprised with both the minimal setup and ease of use of the system.

A few features of Netlify CMS made integration with my existing Gatsby site a breeze:

* No database is required! The content is still stored in markdown files in my GitHub repository like before. I didn't even need to modify my existing directory structure or move any files.
* Configuration is all handled via a `.yml` file, making it simple to customize exactly what content is controlled by the CMS. This makes it feel extremely lightweight, unlike some other bloated systems I have worked with in the past.
* Authentication can be handled via GitHub and OAuth, so no new credentials are necessary. While documentation around this setup could've been a little more consolidated, once I found the proper documentation I had this up and running in minutes.

This is the first post I've done with this new system, and it's been so painless I'm considering using the CMS to manage other content on this site.  I could also see this CMS being useful for non-technical authors of static sites, and I will most likely leverage it for a future side project.  If you're on the market for an exceedingly simple solution to static site content management, be sure to check it out.  
