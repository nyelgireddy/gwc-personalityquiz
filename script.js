//Global Variables
//This is where you will define the variables you will be using in your project.
//#TODO: Create four variables to track each possible quiz outcome
var questionCount = 0;
var winterScore = 0;
var springScore = 0;
var summerScore = 0;
var fallScore = 0;


//#TODO: Use the DOM to create variables for the first quiz question.
//Get elements from first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

//Get elements from second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

//Get elements from third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

 //Get elements from fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var result = document.getElementById("result");






//#TODO: Add Event Listeners to your answer choice variables.
q1a1.addEventListener("click", winter);
q1a2.addEventListener("click", spring);
q1a3.addEventListener("click", summer);
q1a4.addEventListener("click", fall);

q2a1.addEventListener("click", winter);
q2a2.addEventListener("click", spring);
q2a3.addEventListener("click", summer);
q2a4.addEventListener("click", fall);

q3a1.addEventListener("click", winter);
q3a2.addEventListener("click", spring);
q3a3.addEventListener("click", summer);
q3a4.addEventListener("click", fall);

q4a1.addEventListener("click", winter);
q4a2.addEventListener("click", spring);
q4a3.addEventListener("click", summer);
q4a4.addEventListener("click", fall);







//#TODO: Define quiz functions here
function winter(){
  winterScore += 1;
  questionCount += 1
  //alert("One Point to winter!");
  if (questionCount >= 4){
    updateResult();
  }
}

function spring(){
  springScore += 1;
  questionCount += 1;
  //alert("One Point to spring!");
  if (questionCount >= 4){
    updateResult();
  }
}

function summer(){
  summerScore += 1;
  questionCount +=1;
  //alert("One Point to summer!");
  if (questionCount >= 4){
    updateResult();
  }
}
function fall(){
  fallScore +=1;
  questionCount +=1;
  //alert("One Point to fall!");
  if (questionCount >= 4){
    updateResult();
  }
}

function updateResult(){
  if (winterScore >= 3){
      result.innerHTML = "Winter!";

  }
  else if (springScore >= 3){
      result.innerHTML = "Spring!";

  }
  else if(summerScore >= 3){
      result.innerHTML = "Summer!";

  }
  else if(fallScore >= 3){
      result.innerHTML = "Fall!";

  }
  else {
  result.innerHTML = "Hmm.. Your taste buds are tingling. Try again later.";
  }
}
