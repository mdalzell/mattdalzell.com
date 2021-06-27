---
title: 'TIL: Python Default Parameters'
date: 2020-02-01T21:13:19.250Z
tags:
  - TIL
  - Python
draft: false
---
I'm a total noob with Python, but I've always been interested in learning more about it, since it seems to be widely used for everything from web applications to statistical analysis to machine learning.  Currently I am teaching myself the basics of Python by using it to solve 2019's [Advent of Code](https://adventofcode.com/2019) challenges.  I plan on doing a full write-up of my experiences when I complete all 25 days of problems (which will probably be around Christmas in July at my current rate), but I wanted to make sure to document a misunderstanding with Python default parameters that had me stumped way longer than it should have.

To solve the AoC problems, I created a simple CLI that takes both the day and the part (one or two) and outputs a result.  I had just wrapped up the 11th day with the correct result, when I noticed that one of my tests for that day was failing, even though I had verified that everything was working only minutes before.  After a bit of debugging, I noticed that the first executed test would pass and the second would fail, regardless of the test itself.

Obviously, this meant that the tests must not be truly independent of each other; however I had no idea how this could be.  I was instantiating new objects in each test...how could they possibly be coupled?  I went down a totally wrong route at first, and looked into whether or not Python has some sort of caching during execution.  After some time banging my head against the wall, I started fresh and noticed that within my `IntCode` class the `inputs` member was not being reset during the test runs:

```
def __init__(self, intList, inputs=[]):
        self.inputs = inputs
        self.intList = intList
```

Just as a sanity check, I tried instantiating the second `IntCode` class with a new array explicitly, and magically everything worked!  So obviously defaulting the `inputs` array wasn't working as I had expected.  After a bit of research, I discovered that in Python, defaulted values are set when the function is _defined_ - not when it is executed.  When running my tests, my class was setting `self.inputs` to a mutable array value, and with each subsequent execution, even with a totally different instance of the class, it was not being reassigned to an empty array as I had assumed.

After a little bit of cursing, I found that the recommended course is to use only non-mutable values as a default parameter.  In my case, I set the default to be `None`, and then reassigned the member in `__init__` if necessary:

```
def __init__(self, intList, inputs=None):
        self.inputs = inputs or []
        self.intList = intList
```

Apparently, this is a common mistake people run into when first learning Python since coming from other languages this isn't very intuitive and it doesn't seem to be caught by standard linting, making it a very suitable GOTCHA.

tl;dr; In Python, only use immutable values as default arguments

For some more detailed info on this topic, check out these resources:

* <http://effbot.org/zone/default-values.htm>
* <https://stackoverflow.com/questions/1132941/least-astonishment-and-the-mutable-default-argument>
