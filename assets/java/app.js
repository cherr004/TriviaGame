$(document).ready(function() {

//Setting up variable which is where we begin the countdown of the timer (so setting for 30 seconds)
var timeLeft = 30;

//setting variables to hold the correct/incorrect answers
var correctAnswers = "";
var incorrectAnswers = "";

// Creating a variable with arrays that hold all of the questions, possible answers, and then the index # of the correct answer for each
var answers = ["Toy Story", "Fred Spice", "Chicago Bulls"];

//creating variable that has an array to cycle through the question choices in the radio button answers
var questionsChoices = ["movieQuestion", "spiceGirls", "nbaTeam"];

//Creating variables for the divs that we're going to hide before the start button is clicked
var timeRemaining = $("#timeRemaining");
var question1= $("#q1");
var question2= $("#q2");
var question3= $("#q3");
var answers1= $("#q1Answers");
var answers2= $("#q2Answers");
var answers3= $("#q3Answers");
var startButton = $(".startButton")

// setting reset function

function reset(){
    timeLeft = 30;
    timeRemaining.hide();
    question1.hide();
    question2.hide();
    question3.hide();
    answers1.hide();
    answers2.hide();
    answers3.hide();
    startButton.show();
};

//setting function to display all the game divs when the game starts
function gameStart(){
    timeLeft = 30;
    timeRemaining.show();
    question1.show();
    question2.show();
    question3.show();
    answers1.show();
    answers2.show();
    answers3.show();
    startButton.hide();
};

//setting the hidden divs to show and starting the game when the start button is clicked
startButton.on(click, function() {
    gameStart();
});


//setting reset fuction to run when the start button is clicked
startButton.on(click, function() {
    reset();
});

// Creating a variable to display game over text
var gameWin = ("Congratulations you won! You got" + correctAnswers + "questions right and you got" + incorrectAnswers + "questions wrong");

//hiding container for game conetnt till the start button is clicked
$(".container2").hide();

// Creating click function to start the game when the button is clicked 
//Creating the countdown timer (set to 30 second countdown)
//Creating click event for countdown timer to start
    startButton.on('click', runCount);

// Creating function that cause the number of seconds to decrease with time, and to display the result of that decrease until time is up. 
   function descendingCounter(){
       // Decrease number by one.
       timeLeft--;
       // Show the number in the #timeRemaining div.
       $('#timeRemaining').text("Time remaining:" + timeLeft + "seconds");
       // When the time remaining hits zero, 
       if (timeLeft === 0){
       // run the stop function.
       stopCount();
       // Alert the user that time is up. alert('Time Up!')
       alert("Time is up!");
       checkAnswers();
       }
   };

//Setting the interval of the counter (basically means that we're just setting the counter to move by 1 second)
    function runCount(){
        counter = setInterval(descendingCounter, 1000);
        };

//Setting the function to clear the counter
    function stopCount(){
        // Clears our "counter" interval. The interval name is passed to the clearInterval function.
        clearInterval(counter);
    };

  //Log answers from user and check if they're correct.
  function questionAnswer() {
      //for loop that runs through the correct answers for each question
    for (a = 0; a < answers.length; a++) {
//variable to get the answer input from the button selection 
      var buttonInput = document.getElementsByName(questionChoices[i]);
      var checked = false;
      var userAnswer;
//for loop that checks to see that the players selected answer is correct
      for (b = 0; b < buttonInput.length; b++) {
        if (buttonInput[b].checked) {
          checked = true;
          userAnswer = buttonInput[b].value;
        }
      };

      if (userAnswer === answers[a]) {
        correctAnswers++;
      } else if (!checked) {
        notAnswered++;
      } else {
        incorrectAnswers++;
      }
    };
    };
    
    gamePlay.reset();

startButton.on('click', function() {
  gameStart.play();
});

//Limiting the answer to 1 per question
//alert("Congratulations you won! You got" + correctAnswers + "questions right and you got" + incorrectAnswers + "questions wrong");
//reset();