---
title: 'GOTCHA: Catching Custom Errors in TypeScript'
date: 2020-06-27T15:11:06.080Z
tags:
  - GOTCHA
  - TypeScript
draft: false
---
Oftentimes it is useful to implement custom errors, whether for performing different logic in a catch block or simply for more detailed logging.  Recently, I ran into some trouble catching a custom error in TypeScript, and I encountered a nuance in the language that would make an informative entry in my GOTCHA series.

To replicate my experience, let's start with a custom error:

```
class BaseballError extends Error {
    constructor(m: string) {
      super("The fielder missed a routine play");
    }
}
```

And now let's try to catch it: 

```
catch (e) {
   if (e instanceOf BaseballError {
       markOnScorecard();
   } 
}
```

There is a bug in the `BaseballError` class that would cause the if statement to evaluate false and the error to be passed over.  Can you find it?

The problem is that by extending `Error`, `BaseballError` internally has `this` set to be an instance of `Error`, including the the _prototype_.  Unless the prototype of `this` is explicitly set in the constructor , it will always remain equal to `Error.prototype`, causing `instanceof BaseballError` to evaluate false.  This was unintuitive to me, as I had assumed that in TypeScript the prototype was always set to match the constructor's class upon instantiation.

A better version of the `BaseballError` class looks like this:

```
class BaseballError extends Error {
    constructor(m: string) {
      super("The fielder missed a routine play");
      Object.setPrototypeOf(this, BaseballError.prototype);
    }
}
```

Note that `Object.setPrototypeOf` needed to be called _after_ the `super` constructor, because it needs to execute after the prototype of `this` is initially set.

For more behavior on why this occurs, check out [Microsoft's documentation of this change](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#generated-constructor-code-substitutes-the-return-value-of-super-calls-as-this) when it was introduced with TypeScript 2.1.
