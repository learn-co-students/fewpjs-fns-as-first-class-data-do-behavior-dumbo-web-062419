/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

function greet(time) {
  var numbers = time.split(':');
  var hour = parseInt(numbers[0]);
  
  if (hour < 12 ) {
    return "Good Morning";
  } else if (hour > 17 ) {
    return "Good Evening";
  }
  else {
    return "Good Afternoon";
  }
}

function displayMessage(string) {
const greeting = document.querySelector('#greeting')
greeting.innerText = string
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */
