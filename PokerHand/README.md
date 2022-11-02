<img width="150px" src="https://w0244079.github.io/nscc/nscc-jpeg.jpg" >

# PROG 2700 - Assignment - Poker Hand

## Prerequisites

Required: FreeCodeCamp.org & Make an API call.

## Summary

Using the publicly available [Deck of Cards API](https://deckofcardsapi.com), you will create a small JavaScript application that uses the API to provide data so that you can do the following:
* Retrieve a shuffled deck of cards from the API
* Pull five(5) cards from the deck and display them in a web page.
* Research and write a function that takes the five cards and determines the highest poker hand that can be calculated.

## Code Submission

For this assignment, you are required to commit and push your code after completion of each requirement in the assignment. It is required that you commit and push after the completion of each requirement so that you build a history of commits and pushes that you can show to the instructor if requested. Your assignment will not be assessed without this histroy of commits and pushes. You cannot commit and push to GitHub too many times.

## General Requirements (50 points)

### REQ-1 - Retrieve and persist a Deck of Cards from the API (10 points)

Using the [Deck of Cards API](https://deckofcardsapi.com), use the `fetch` api to retrieve a deck of cards that can be used by the application. DO NOT request a deck with wild/Joker cards included. Be sure to store the returned data in an appropriate way.

### REQ-2 - Request Five Cards from the Deck (10 points)

Using the deck that was retrieved in REQ-1, ask the API for a hand of five cards from the deck. Store the given cards in an appropriate manner in your code so that you can evaluate its contents.

### REQ-3 - Display the Hand in a Web Page (10 points)

Display the five cards that were dealt in REQ-2 in some manner that can be seen in the browser. This can be done by either:
* Displaying the cards names in some manner using `document.write` to the web page
* Displaying the images of the cards on the web page by modifying the DOM. (ie, Manipulate any `<img />` tags that you've defined in the `index.html` page)

### REQ-4 - Write a function that will determine the highest poker hand for the five cards. (15 points)

Write and use a function that will calculate and output the highest poker hand based on the given five cards:
* If you are not familiar with Poker or the hand rankings, a description can be found here https://www.oddsshark.com/poker/hand-rankings
* If you are still unsure about how the hands and rankings work, reach out to your instructor for clarification.

### REQ-5 - Wrap the entire application in an Independently Invoked Function Expression (IIFE). (5 points)

To ensure that your entire application will be contained within its own scope and will not pollute the global scope, wrap the entire contents of your application inside an IIFE. Be prepared to demonstrate how your script's data is being contained within its own scope and not within the browser's global scope (ie, window) 

## Assessment

1. Don’t forget that a student-led demonstration of your code is part of this assignment. This demonstration will be done either live with the instructor or submitted as a video walkthough. Part of the assessment will include your ability to speak about the code you wrote, even if it doesn’t completely work or do what you expect.
2. Late submissions will be subject to the late penalties laid out in the course outline.

## Academic Integrity and Plagiarism

Code sharing by any means is considered plagiarism and is strictly forbidden under the NSCC Academic Integrity policy. 

[NSCC ACADEMIC INTEGRITY GUIDELINES](https://www.nscc.ca/docs/about-nscc/policies-procedures/policy-academicintegrity.pdf)  
[NSCC ACADEMIC INTEGRITY REPORTING POLICY](https://www.nscc.ca/docs/about-nscc/policies-procedures/procedures-academicintegritystudent.pdf)
