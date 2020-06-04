'use strict';
var username = prompt('hello what is your name');
alert('Hello ' + username + 'Welcome!');
//

function lastName(){
  var lastName = prompt('What is David\'s last name');
  if (lastName === 'Quinn' || lastName ==='quinn'){
    alert('Nice Job');
  } else {
    alert('no it\'s Quinn.');
  }
}

lastName();

function colorQuestion(){
  var favoriteColor = prompt('what David\'s favorite color? Hint its the color of his eyes sometimes');
  if (favoriteColor !== 'blue')
  // console(log)
    favoriteColor = alert('wrong its Blue');
  if (favoriteColor === 'blue')
  // console(log)
    alert('Nice Job');
}

colorQuestion();

function australiaQuestion(){
  var australiaAnswer = prompt('has David been to Australia?');
  if (australiaAnswer !== 'yes')
  // console(log)
    australiaAnswer = alert('actually he has its beautiful there');
  if (australiaAnswer === 'yes')
  // console(log)
    alert('Nice Job');
}

australiaQuestion();

function mexicoQuestion(){
  var mexico = prompt('has David been to mexico?');
  if (mexico !== 'yes');
  // console(log)
  mexico = alert('actually he has multiple times');
  if (mexico === 'yes');
  // console(log)
  alert('Nice Job');
}

mexicoQuestion();

function timesMexico(){
  var timesBeenMexico = prompt('How many times has he been to mexico?');
  if (timesBeenMexico === '4'){
    alert('Nice Job');
  } else {
    alert('Wrong. he has been cuatro times');
  }
}

timesMexico();

function ageQuestion(){
  var ageQuestion = prompt('how old is david?');
  if (ageQuestion === '24')
    alert('Nice Job');
  // console(log)
  var count = 1;
  while (ageQuestion != 24 && count<4){
    if (ageQuestion < 24)
      alert('Nope try a little higher');
    if (ageQuestion > 24)
      alert('Nope try a little lower');
    // console(log)
    ageQuestion = prompt('how old is david?');
    count++;
  }
  alert("David is 24 (year of Kobe)");
}

ageQuestion();

// for(var i = 0; i < firstArray.length; i++){
//         alert(firstArray[i]);


function continentQuestion(){
  var myContinents = ['north america', 'europe', 'asia', 'australia'];
  var correctContinent = false;
  var count = 0;


  // runs once for every chance they have
  while (correctContinent === false && count < 6){
    var continent = prompt('What continent has David been to?');
    count++;
    // this loop verifys the answer
    for(var i = 0; i < myContinents.length; i++){
      if (continent === myContinents[i]){
        alert('Good job!');
        correct++;
        correctContinent = true;
      }
    }
    if (correctContinent === false){
      alert('wrong');
    }
  }
}

continentQuestion();

var today = new Date();
var hourNow = today.getHours();
var greeting;
if (hourNow > 18) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon';
} else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Welcome!';
}
document.write('<h3>'+ greeting + '</h3>');


var username = prompt('what is your name');

document.write('<h3>' + username + '</h3>');
var parent = document.getElementById('username');

