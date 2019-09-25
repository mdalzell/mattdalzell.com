---
title: Who Watches the Watchmen?
date: 2019-09-24T00:20:38.756Z
tags:
  - Unit Tests
  - Testing
  - Code Review
draft: false
---
One of the most common areas of feedback in code review is test coverage.  "Can we add additional tests here?" and  "Can we test for this edge case?" are questions just about every software engineer has left on a pull request, and most developers have been on the receiving end of these comments as well.  

There's good reason for this; there are countless other blog posts detailing the value of unit, integration, and end-to-end testing.  However, despite the dogmatic approaches to testing and test coverage, I rarely see developers evangelizing for the quality of tests _themselves_.

In my experience, during code review tests are often not given the same level of thorough consideration as source code.  Additionally, what relatively little attention test code receives tends to be focused on how the tests impact coverage, not on the correctness of the tests themselves.

The question developers need to ask here is "Who watches the watchmen?" Software engineers rely on tests to guarantee the correctness of their code, however they don't put as much effort into the correctness of their tests.  This is scary to me, since in my opinion bad or misleading tests are even more dangerous than no tests, because they give developers confidence in their changes when they should have none.

There are three main points that I assess when evaluating test coder:

1. **Code Quality** - As a baseline, I expect tests to have the same level of quality that source code does.  Some argue that it's not necessary to spend a lot of time on test code, if it is functional then it is fine.  I disagree, because just like source code, test code is going to be have to be understood and maintained long after it is initially written.  I don't think test code needs to be over-engineered, but it should be clean.
2. **Coupling** - After assessing the code quality in syntactical terms, I look at what the test is actually doing.  Is this test evaluating outputs, or does it rely on a particular implementation?  How fragile is this test?  If a test is too coupled to a particular implementation for its stated goal, then I'll make sure to leave a comment.  Of course, different levels of coupling are acceptable depending upon the context.  For example, e2e tests are inherently more coupled to the application itself than unit tests.
3. **Purpose** - Finally, after considering both the syntax and the architecture of the test, I evaluate whether or not the test fulfills its purpose.  This might seem like a no-brainer, but I have encountered tests plenty of times that seemingly only exist to increase code coverage, without any other tangible benefits.  Test code is still code that needs to be maintained, and if test code is providing little or no value, then it should be changed or in some instances removed.

Nothing feels worse than when a project with decent coverage has all test pass, only to find later that a breaking change was left uncaught.  Unfortunately, this happens way more often than it should.  The only way to prevent this is to be cogniscent that testing has a purpose beyond coverage percentage, and to start giving test code the consideration it deserves.
