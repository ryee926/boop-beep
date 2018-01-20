/*
Specifications:
1. put user's input into an array
2. for loop to see if the array contains any "1" or "0"
3. if the array contains a "1", to return "Boop!", and if array contains "2", to return "Beep!"
4. if the array contains a "3", to return "I'm sorry, Dave. I'm afraid I can't do that."

*/
var checkNums = function(numArray) {
  var numCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] !== "0" && numArray[i] !== "1" && numArray[i] !== "3") {
      numCheck = true;
    }
  }
  return numCheck;
};

var checkBeeps = function(numArray) {
  var beepCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "0") {
      beepCheck = true;
    }
  }
  return beepCheck;
};

var checkBoops = function(numArray) {
  var boopCheck = false;
  for(var i = 0; i < numArray.length; i++) {
    if(numArray[i] === "1") {
      boopCheck = true;
    }
  }
  return boopCheck;
};

// var checkDave = function(numArray) {
//   var daveCheck = false;
//   for(var i = 0; i < numArray.length; i++) {
//     if(numArray[i] === "3") {
//       daveCheck = true;
//     }
//   }
//   return daveCheck;
// };

var checkMod = function(numInput) {
  var modCheck = false;
    if(numInput % 3 === 0) {
      modCheck = true;
    }
  return modCheck;
};



$(document).ready(function() {
  $("form#boopForm").submit(function(event){
    event.preventDefault();

    var nameInput = $("#name").val();
    var numInput = $("#num").val();
    var numArray = Array.from(numInput);

    var notOne = checkNums(numArray);
    var isBeep = checkBeeps(numArray);
    var isBoop = checkBoops(numArray);
    // var isDave = checkDave(numArray);
    var divisible = checkMod(numInput);

    console.log(numArray);
    console.log(divisible);

    if(nameInput === '') {
      $("#beepBoopResult").text("Oops, you forgot to enter your name.");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();
    }

    if(divisible === true) {
      $("#beepBoopResult").text("I'm sorry, " + nameInput + ". I'm afraid I can't do that.");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();


    // } else if(isDave === true) {
    //   $("#beepBoopResult").text("I'm sorry, Dave. I'm afraid I can't do that.");
    //   $("#SURPRISE").fadeIn(800);
    //   $("#boopForm")[0].reset();


    } else if (isBoop === true) {
      $("#beepBoopResult").text("Boop!");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();

    } else if(isBeep === true) {
      $("#beepBoopResult").text("Beep!");
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();

    } else if (notOne === true) {
      $("#beepBoopResult").text(numInput);
      $("#SURPRISE").fadeIn(800);
      $("#boopForm")[0].reset();
    } else {
      $("#beepBoopResult").text("Oops, you forgot to enter a number.");
    }

  });

});
