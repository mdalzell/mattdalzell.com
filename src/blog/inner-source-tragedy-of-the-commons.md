---
title: "Inner Source: Tragedy of the Commons?"
date: 2021-03-13T02:13:00.818Z
updatedOn: ""
tags:
  - OpenSource
draft: true
featured: false
---
The world is built upon open source software, with some of the most pervasive technologies used today being developed with that model.  Given the wild success of open source, it only makes sense that private enterprises would try to capture some of that magic with their software projects.  The result is internal open source, or [inner source](https://en.wikipedia.org/wiki/Inner_source), which is the application of open source principles and practices to closed source code within a company.

Of course, the namesake of open source is not possible with most work at private companies, so how does inner source actually operate?  Generally, it's just the idea of removing silos from within engineering departments, allowing any engineer to review and contribute to code across the organization.  Code is open for engineers to collaborate on, with an approval and merge process similar to open source projects.  Sometimes, this is accomplished with the same tooling as real open source, such as GitHub or GitLab.  

I've worked at a few places that have followed this modal, and for the most part it is much more preferable than organizations that have strict barriers between teams and codebases.  Because of inner source development, I've been able to contribute bug fixes that mattered to my team but otherwise wouldn't have been highly prioritized.  However, the one major pitfall I've also encountered is the [tragedy of the commons](https://en.wikipedia.org/wiki/Tragedy_of_the_commons).  

When organizations set up an inner source development model, usually projects sprout up that no singular team owns.  Oftentimes, these are projects or libraries shared by several teams, and can even be foundational to core applications.  However, unlike traditional open source which is a labor of love, in a private enterprise there are competing incentives to actually maintaining these projects.  If your team's performance is measured by the projects that they own and hitting their deadlines, it would not be surprising to see them focus on that at the exclusion of shared projects, even if the shared work would have a higher impact across the organization.  Morever, this can even create a game of chicken between teams, where every team expects another team to actually do the shared work that they will need.  This can lead to disagreements between teams about who should actually do what, and it can get really messy as big deadlines loom.  The common projects eventually decay, and wind up causing more problems and slowing overall development down.

What can be done about this?  My suggestion would be that any project within an organization needs an owner, whether a team or an individual, that has time set aside to *specifically* work on that project.  This is similar to most successful open source projects, which have owners and key contributors that shepherd the development process.  Perhaps your team claims ownership over a shared design library, and then allocates one day a sprint to contribute code, review pull requests, and otherwise manage that project.  The time allocation part is critical; if time is not set aside then work will inevitably be dropped whenever a more "urgent" matter rears its head.

I'm not advocating for silos here, nobody likes gatekeeping and generally that only hurts building shared knowledge between teams.  But I do believe that having some form of ownership of all code is essential to ensuring the health of all projects within an inner source model.