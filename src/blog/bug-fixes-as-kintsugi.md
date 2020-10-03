---
title: Bug Fixes as Kintsugi
date: 2020-10-03T21:35:41.429Z
tags:
  - Bugs
  - Refactoring
draft: true
featured: false
---
Recently, I learned about the Japanese tradition of [kintsugi](https://en.wikipedia.org/wiki/Kintsugi), where broken pottery is repaired using gold or another rare metal.  The meaning of this philosophy is that flaws and imperfections are not something to be hidden, but in fact contribute to the history and beauty of the object.  Not only did discovering this art explain a whole lot about [the Death Cab for Cutie album with the same name](https://en.wikipedia.org/wiki/Kintsugi_(album)), but it also made me think about how bug fixing can fill a similar role in software engineering.

Bugs are generally viewed as mistakes or oversights, regrettable bits of code that should be fixed and forgotten.  Besides the ghost of a JIRA ticket somewhere in the abyss, there often is very little record of the bug, its history, its cause, and its eventual evolution to a presumably more correct state.  Bug fixes should be like the gold mending the two pieces of ceramic, drawing attention to that area of code like a glittering crack in a Japanese teapot.  Identifying these fixes provides a more holistic view of the application, where previous pain points were and how they were hopefully resolved.  Areas of the code with lots of bug fixes signal that the logic is particularly troublesome or complex, and requires special attention.

Practically, how can this be accomplished?  One place to start would be to **always** use meaningful commit messages,  ideally referencing a ticket or bug number.  At the very least, someone who sees the message in `git blame` would know where to start looking for more context.  For more insidious bugs, I like to leave a short comment explaining the bug and the fix.  I know commenting code can sometimes be controversial, especially to the "code should be self documenting" crowd, but I've found that a comment explaining *why* rather than *what* is almost always helpful.  Mindfulness when fixing bugs can go a long way, and a short message from the past can be worth its bits in gold to a developer reading the code months or years down the line.