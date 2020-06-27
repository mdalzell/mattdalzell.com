---
title: 'GOTCHA: Catching Custom Errors in TypeScript'
date: 2020-06-27T15:11:06.080Z
tags:
  - GOTCHA
  - TypeScript
draft: true
---
Oftentimes it is useful to implement custom errors so that they can be handled differently in catch blocks, or even just for more detailed logging.  Recently, I was stuck on catching a custom error in TypeScript, and it took me perhaps an embarrassingly long amount of time to figure out why.  After figuring out the problem, I thought that this would make a good entry in my GOTCHA series.

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

The problem is that by extending `Error`, `BaseballError` internally has `this` set to be an instance of `Error`, including the the _prototype_.  Because `instanceOf` checks the prototype, without explicitly setting it in the constructor the prototype will always remain the same as the base class (in this case `Error`).

A better version of the `BaseballError` class looks like this:

```
class BaseballError extends Error {
    constructor(m: string) {
      super("The fielder missed a routine play");
      Object.setPrototypeOf(this, BaseballError.prototype);
    }
}
```

Note that `Object.setPrototypeOf` needed to be called *after* the `super` constructor.

For more behavior on why this occurs, you can check out [Microsoft's documentation of this change](https://github.com/Microsoft/TypeScript-wiki/blob/master/Breaking-Changes.md#generated-constructor-code-substitutes-the-return-value-of-super-calls-as-this) when it was introduced with TypeScript 2.1.
