---
title: 'Comparison of LaunchDarkly React Libraries'
date: '2019-05-20'
tags: ['React', 'JavaScript', 'LaunchDarkly']
---

[LaunchDarkly](https://launchdarkly.com/) is an awesome feature flag management platform that allows for simple control of flags across multiple environments, allowing us to non-ironically test in production. LaunchDarkly supports most popular web languages, and there are a bunch of 3rd party libraries out there as well to make life easier for developers. For React applications, I've tried a few different routes for handling the client side feature flags, each with their own trade off of benefits and limitations.

TrueCar's [react-launch-darkly](https://github.com/TrueCar/react-launch-darkly) is a good place to start if all you need is a simple library to conditionally display components. A lot of the LaunchDarkly JavaScript SDK is abstracted away in this library, so that as a developer you can just focus on your own app and not managing LaunchDarkly. Just wrap your app in the `LaunchDarkly` component, throw your new functionality in a `FeatureFlag` component, and you're good to go. As expected though, the price of this simplicity is that it is more challenging to custom logic based on flags or on events such as a flag change.

Another great option is [LaunchDarkly's own React SDK](https://github.com/launchdarkly/js-client-sdk/tree/master/packages/launchdarkly-react-client-sdk). This library provides a set of higher order components that initialize the LaunchDarkly client and then pass the flags in as `props` wherever needed. One big benefit of this library is that the `ldClient` is passed into `props` along with the flags, allowing direct access to the client and all accompanying functionality. This library is a little less plug-and-play than TrueCar's, but the easy direct access to the client allows for easier implementation of custom logic.

One final route to take is implementing your own LaunchDarkly React components using the base [JavaScript SDK](https://github.com/launchdarkly/js-client-sdk). I've gone this way when I've needed total control over the client, from initialization to event handling. Using the other libraries as a guide, it's actually pretty simple to use the Context API to deliver the client where needed. From there, it is trivial to build a `FeatureFlag` component for easy conditional rendering and a HOC for passing in the client and flags to whatever component needs them. When rolling your own, there is additional effort required to configure the flag change subscriptions which the above libraries do automatically, and of course there is more work in maintaining a custom implementation as opposed to using a library.

In general, I'll probably stick with LaunchDarkly's React SDK for production applications, unless custom client initialization logic was necessary, in which case I would build my own context and components using the base JavaScript SDK.
