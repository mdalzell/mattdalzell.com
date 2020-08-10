---
title: Don't Stop Me Now
date: 2020-03-20T01:56:41.487Z
tags:
  - Terraform
  - CI/CD
  - Flutter
draft: true
---
Software engineers live for optimization and efficiency. It's the nature of our profession. So when something slows slows me down, especially when it seems unnecessary, I get frustrated.  Here is a rant of my top time sinks so far this year, in no particular order:

**Mobile Emulators**

For most of my career, I've primarily worked with web applications, APIs, and other technologies that can be easily tested using [Insomnia](https://insomnia.rest/), [Postman](https://www.postman.com/), or just a browser.  Recently, I've done a little bit of mobile work, mostly with Flutter but with native code as well.  I enjoy working with Flutter and Dart, but running an app on an iOS or Android emulator is just as much of a pain as it is with native code.  

Since one of Flutter's selling points is one codebase for both platforms, I wish there was a lightweight sandbox that could run the application without needing a full device emulator.  Any native specific functionality could be mocked out, perhaps displaying a toast or something when activated.  Taking the native emulators out of the equation for day-to-day work would vastly improve the mobile development experience.

**CI/CD Pipelines**

Let's say you're working on a small bug fix, a literal one liner.  You pull the code, create a branch, make the change, and create a PR within 15 minutes.  By some miracle a code owner approves almost immediately.  You just need to wait for the build to finish, and then you're good to merge in.

So you're waiting...and waiting...and waiting...by now the bulid process has taken longer than the actual bug fix.  You check on the Jenkins job, and luckily enough you are on the last step. It then fails, and your heart drops.  It could be a temporary connection interruption, expired keys, or worse, a flaky test (for shame).

I think most software engineers today believe CI/CD of some sort is necessary to maintain any project of non-trivial complexity, but I would bet that most of them would also relate to the above experience.  Many would say that poor test code or pipeline construction is the real issue here, but if so many people have this same problem, then maybe this solution can be improved upon.  

What I'm looking for is the next evolution in CI/CD, something that validates the intrinsic nature of the code rather than functionality of the code itself, saving time on spinning up images of the application, installing dependencies, and the like.  Who knows, maybe AI code analysis will get there one day, leaving direct application testing outside of merge pipelines.

**GitHub Issues**

One trend I've noticed lately is that GitHub Issues seems to be the #1 place to find answers to problems with a particular library or framework (for language questions, StackOverflow still probably reigns supreme).  Running into errors will inevitably lead to a google search, which then returns 3 pages of GitHub issues that needed to be waded through in order to find one tip that _might work_, although you can't really be sure since someone below said it didn't work for them and they got three thumbs ups.

One glimpse at the[ Flutter GitHub Issues](https://github.com/flutter/flutter/issues) page demonstrates the sort of hellscape I'm talking about.  I get trying to treat issues as living documentation, but if the documentation is so unorganized and the solutions themselves aren't easily verified, then how helpful is it really?  I think something that turns git issues into an easily searchable knowledge base of _correct_ answers, or better yet, actual documentation, would be a killer feature for GitHub, GitLab, or any other source management tool.

**Corporate VPNs/Proxies/Networking**

This one needs no explanation, anyone who's worked in an enterprise environment knows exactly what I'm talking about here.  For some reason, in corporate environments it is notoriously difficult to set up new systems, get access across networks through proxies, etc.  You would think that this should actually be easier in a large company, since each individual piece is really just a cog that should be infinitely replicable, but alas in the real world the exact opposite appears to be true.

What I think would be cool here is IT as code (trademarking this).  Network admins can manage network state, proxies, even machine images using scripts or config files.  While I know IT professionals use these tools to some degree, from what I've see, these mostly seem to be ad hoc solutions rather than standardized configuration language like Terraform.

And while we're on the topic of Terraform...

**Terraform/Infrastructure as Code**

This one is a little tough to say, because overall I'm a big fan of Terraform and the other tools from [Hashicorp](https://www.hashicorp.com/).  I also believe that representing infrastructure as version controlled code is much, much better than manual configurations passed own as tribal knowledge.  

Where I think things can be improved is in the planning/validation steps.  From what I've seen, using Terraform, CloudFormation, and the like involves a bit of trial and error to get totally right, especially if you're doing something new.  I think any way to speed up the feedback cycle to reduce or eliminate trial and error would go a long way in making these services even better to use.  

For this gripe at least, I have faith that Hashicorp will continue to improve their product.  But every other annoyance in my list could be an opportunity for a side project, open source solution, or even a business.  I wouldn't be surprised if there are existing remedies for these issues already out there.  Hopefully years from now I can return to this list and laugh about the sorts of things that drove software engineers mad in 2020.
