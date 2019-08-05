/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const splitTime = time.split(':');
  const hour = splitTime[0];
  let greeting;

  if (hour < 12){
    greeting = "Good Morning";
  } else if (hour < 17) {
    greeting = "Good Afternoon";
  } else {
    greeting = "Good Evening";
  }

  return greeting;
}

/* Write your implementation of displayMessage() */
function displayMessage(string){
  const greeting = document.querySelector('#greeting');
  greeting.innerText = string;
}
