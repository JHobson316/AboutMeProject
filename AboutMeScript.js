"use strict"
var points = 0;
function GameIntro() {
    alert("Hello! It seems like you want to play a game.");
    //This prompt asks the user to input their name
    let User = prompt("First off, what's your name?");
    // Name is used in the next alert message
    alert("Alright, " + User + "! All you have to do to answer these questions is type 'y' if you think the statement is true or type 'n' if you thin that it's false. Let's get to the questions!");
    q1();
}
function q1() {
    // The prompt asks for the user to input y or n. If the input matches one of these and determines what to do afterward
    let answer1 = prompt("Nintendo's flagship character, Mario, was initially named Jumpman.");
    // Making the answer all lowercase
    let answer1L = answer1.toLowerCase();
    // compares the lowercased answer with the possible options
    if (answer1L == "y") {
    //Answer was correct, so a point is added and the user goes to the next question
        alert("Correct!");
        points++;
        q2();
    }
    // Answer was incorrect, so it notifies the user and asks the question again
    else if (answer1L == "n") {
        alert("Incorrect!");
        q2();
    }
    else {
        q1();
    }
}
//Same as q1
function q2() {
    let answer2 = prompt("Sony bought Bungie Studios in 2022 for $4.8 Billion.");
    let answer2L = answer2.toLowerCase();
    if (answer2L == "y") {
        alert("Incorrect!");
        q3();
    }
    else if (answer2L == "n") {
        console.log("Correct!");
        points++;
        q3();
    }
    else {
        q2();
    }
}
//Same as q1
function q3() {
    let answer3 = prompt("Call of Duty: Modern Warfare 2 featured a controversial mission named 'No German.'");
    let answer3L = answer3.toLowerCase();
    if (answer3L == "y") {
        alert("Incorrect!");
        q4();
    }
    else if (answer3L == "n") {
        alert("Correct!");
        points++;
        q4();
    }
    else {
        q3();
    }
}
//Same as q1
function q4() {
    let answer4 = prompt("In Bungie's Game, Destiny 2, a gun named 'Telesto' is known by the community for repeatedly breaking the game.");
    let answer4L = answer4.toLowerCase();
    if (answer4L == "y") {
        alert("Correct!");
        points++;
        q5();
    }
    else if (Answer4L == "n") {
        alert("Incorrect!");
        q5();
    }
    else {
        q4();
    }
}
//Same as q1
function q5() {
    let answer5 = prompt("I'm glad that I'm done with this.");
    let answer5L = answer5.toLowerCase();
    if (answer5L == "y") {
        alert("Correct!")
        points++;
        q6();
    }
    else if (answer5L == "n") {
        alert("Incorrect!");
        q6();
    }
    else {
        q5();
    }
}
// Question 6 has guesses and asks for a number between 1 and 10 before letting the user know how many guesses they left.
function q6() {
    let num = "5";
    //Creating the loop for having a certain amount of guesses to get the question correct
    for (let guesses = 4; guesses > 0; --guesses) {
<<<<<<< HEAD
        let answer6 = prompt(`Guess a number between 1 and 10. You have ${guesses} guesses left.`);
        // If the answer is correct, a point is added, the next question's function is called, and the loop is broken.
        if (answer6 == "5") {
            alert("Correct!");
            points++;
            q7();
            break;
        }
        // If the answer is incorrect, the user is told and the loop continues
        else if (answer6 != "5") {
            alert("Incorrect! Try again.");
        }
    }
}
// Question 7 uses an array of choices that are correct and each count as a correct answer. This function also loops with an amount of guesses
function q7() {
    const colors = ["red", "yellow"];
    for (let i = 0; i < 6; i++){
        let answer7 = prompt(`Which of the following are primary colors? (There's more than one answer, so guess either one.) Orange, Yellow, Red, or Purple? You have ${i} guesses left.`);
        let answer7L = answer7.toLowerCase();
        // Checks if the color is in the array
        //If correct, then points are added and the alert is called
        if (answer7L == colors[0] || answer7L == colors[1]) {
            points++;
            alert("Correct!");
            // The function tells the user their points and breaks out of the loop, ending the game
            alert("Congratulations! You got " + points + " questions correct.");
            break;
        }
        // Just a small secret correct answer that I thought would be cool
        else if (answer7L == "red and yellow" || answer7L == "yellow and red"){
            points++;
            alert("Ah! Very inclusive, my friend!");
            alert("Congratulations! You got " + points + " questions correct.");
            break;
        }
        // If the answer is incorrect, an alert lets the user know and continues the loop
        else {
            alert("Incorrect!");
        }
    }
}

