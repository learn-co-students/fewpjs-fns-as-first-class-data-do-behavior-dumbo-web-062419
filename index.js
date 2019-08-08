/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  let timeHour = parseInt(time, 10);
  if (timeHour < 12 && timeHour >= 1) {
    return "Good Morning";
  }
  else if (timeHour > 12 && timeHour < 17) {
    return "Good Afternoon";
  }
  else {
    return "Good Evening";
  }
}

let string = greet(time);
/* Write your implementation of displayMessage() */
function displayMessage(string) {
  const h1 = document.getElementById('greeting');
  h1.innerText = string;
}
