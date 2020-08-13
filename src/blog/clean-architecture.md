---
title: "\"Clean Architecture\" Review"
date: "2018-09-17"
tags: ["BookReview",  "Architecture"]
---

I'm a fan of Robert C. Martin, AKA Uncle Bob, and his famous book, *Clean Code*.  Generally I favor books on software engineering that will always be relevant regardless of the current technology trends, and Uncle Bob's insights typically go beyond specific languages or frameworks.  So when I saw that he had a new entry to his series entitled *Clean Architecture*, I went to an actual physical book store (in 2018!) and picked up a copy.

*Clean Architecture* reads like an abstract extension of *Clean Code*, almost to a fault.  Many of the primary concepts of *Clean Code* are extrapolated beyond object oriented class construction to the architecture level; in fact roughly half the book is a review of the SOLID principles and component design.  If you're already familiar with these guidelines, you honestly might get a little bored.  Personally, I always like reinforcing these ideas every once in while to keep them fresh in my mind.

In typical Uncle Bob fashion, *Clean Architecture* is a fairly quick read from front-to-back.  Despite the readability, I feel like the content is a little drawn out.  In my opinion, the book could've been about 50-100 pages shorter (and I'm not counting the appendix with Uncle Bob's life story).

Ultimately, I feel like there was one main takeaway: all parts of a system should be as loosely coupled as reasonably possible.  Whether you are opting for a monolith, microservices, or anything in-between, make sure that architectural boundaries are crossed in one direction to minimize the impact of future changes to the code.  Nobody likes having to change the data access layer because of a UI change. 

Unlike *Clean Code*, where I felt I walked away with a greater sense of specific actions I can take to improve my code, *Clean Architecture* left me with a more ambiguous sense of direction and a looser set of guidelines.  Given the nature of software architecture, perhaps that was the point.  