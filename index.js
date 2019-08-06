/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value;
  displayMessage(greet(timeString));
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */

function greet(time){
  const theTime = parseInt(time);
  if(theTime < 12 && theTime  >= 0){
    return "Good Morning";
  } else if(theTime >= 12 && theTime < 17 ){
    return "Good Afternoon";
  } else {
    return "Good Evening";
  }
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  document.getElementById("greeting").innerText = string;
}