---
title: 'TIL: Upgrade to WSL 2'
date: 2020-07-23T02:06:47.549Z
tags:
  - WSL
  - TIL
draft: false
---
A while back [I made it a goal to use Linux](https://mattdalzell.com/blog/2019-new-year-goals/) as the OS for my daily driver, primarily due to concerns over telemetry in Windows 10.  I was able to stick with that through 2019 and the first part of 2020, but the COVID-19 pandemic made it challenging to stick with Linux, as I found myself having to use more unsupported software and hardware.

I switched back to using Windows 10, and to my surprise I've found myself enjoying it quite more than expected.  A large part of that is due to the Windows Subsystem for Linux (WSL) and the new [Windows Terminal](https://github.com/Microsoft/Terminal), which in conjunction with VS Code has made for a pretty streamlined software development toolset.

For most of this time, I was working with the legacy WSL system, but just recently I upgraded to WSL 2.  I'm incredibly glad that I did; the performance gains were immediately noticeable when working within the Linux filesystem. 

To measure this, I conducted a little unscientific experiment using the test suite from my [Advent of Code project](https://github.com/mdalzell/advent-of-code-2019).  After 10 trials on the legacy WSL system, I found that the tests took roughly 107.278 seconds to execute.  With the same machine, sample size, and code, I was able to cut that down to 67.034 seconds by using WSL 2.  _That's a ~37.5% speed increase for free!_

It's not that often that you can get that kind of boost without either new hardware, a lot of effort, or both. While I found the architecture of the legacy WSL more novel (the second edition is basically a fine-tuned VM), you can't argue with results.  So if you're using Windows, willingly or reluctantly, give WSL 2 a shot - I think you'll be pleasantly surprised.
