/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  var militaryTime = parseInt(time, 10)
  if(militaryTime < 12){
    return "Good Morning"
  }
  else if(militaryTime > 12 && militaryTime < 17){
    return "Good Afternoon"
  }
  else if(militaryTime > 17){
    return "Good Evening"
  }
}
/* Write your implementation of displayMessage() */
function displayMessage(str){
  greeting = document.getElementById('greeting')
  greeting.innerText = str
}
