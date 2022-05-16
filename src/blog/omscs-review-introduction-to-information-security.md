---
title: "OMSCS Review: Introduction to Information Security"
date: 2022-05-15T01:24:43.507Z
updatedOn: ""
tags:
  - OMSCS
  - IIS
  - CS6035
  - Security
draft: false
---
Towards the end of last year, [I was admitted into Georgia Tech's OMSCS graduate program](https://mattdalzell.com/blog/enrolling-in-omscs/) as part of the Spring 2022 cohort. I chose to enroll in [CS 6035: Introduction to Information Security (IIS)](https://omscs.gatech.edu/cs-6035-introduction-to-information-security) as my first class for a few reasons: it was highly recommended on student forums, it was project-based, and perhaps most importantly, it is a subject area that I'm very interested in. I had never taken a dedicated security course in undergrad, so most of my knowledge up until recently had been learned on the job from mentors and coworkers. Fortunately, IIS lived up to my expectations for a survey course on computer security, and I'm very glad to have taken it.

The focus of the class (and 80% of the grade) was on the projects, which for the most part were excellent. There were four projects presented in this course:

* Project 1 involved reading and understanding C code in order to craft input that causes a buffer overflow. I had virtually no experience with this topic, so it was fun to figure things out for the first time. The TAs involved in this project put together an awesome set of videos to help introduce the key concepts and demonstrate how to use `gdb` to watch the code execute at the stack level. There was also an optional extra credit assignment associated with this project that required building an input with a NOP sled to perform a different attack.
* Project 2 required analyzing provided malware samples. Unfortunately this was my least favorite project, since it mostly involved interpreting how ambiguous questions related to the traits of the malware. Another portion of the project involved using a machine learning tool to classify the malware; this was slightly more interesting to me although none of the machine learning concepts used were covered at all in the course material. I understand this sort of classification inherently deals with unclear boundaries, so despite not particularly enjoying it I can still see the value in this project.
* Project 3 was centered around public key cryptography and was my favorite even though it was by far the most challenging. The coding portion was in python, which I am pretty familiar with, so most of the difficulty came from trying to understand the underlying principles of modular arithmetic. I basically spent two full weekends on this project, but the time spent was totally worth it since I was required to leave my comfort zone and research a topic entirely new to me.
* Project 4 was focused on web security, so this one was essentially right in my wheelhouse as an experienced frontend engineer. While I had already largely known about these security threats through my professional experience, it was fun to craft the exploits and "hack" the provided site.

\
Even though I enjoyed the projects, I think there is still some room for improvement for the course in general. The lectures were helpful at presenting key concepts, but at times were a little too high level and generalized. The book was more thorough and detailed than the lectures, but was also incredibly dry and covered a huge amount of material. The exams and quizzes had so few questions relative to the material covered that I felt they weren't a great gauge of how much information was actually retained, instead just testing if the student knew a particular bit of trivia.\
\
Overall, I'd echo the sentiment that IIS is a great first class for new OMSCS students, and would recommend it to anyone interested in a survey of different topics in computer security. It was certainly challenging to get back into the student mindset after all these years, but I can already tell it has made an impact on both my foundational computer science knowledge as well as my personal discipline. I'm looking forward to the rest of the curriculum, and hopefully my future courses live up to the standards set by IIS.