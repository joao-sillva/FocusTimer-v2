export function Timer({ minutesDisplay, secondsDisplay }) {
  let timerTimeOut

  function updateTimerDisplay(minutes, seconds) {  
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
  }

  function stopTimer() {
    clearTimeout(timerTimeOut)
  }

  function countdown() {
    timerTimeOut = setTimeout(function() {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      
      if(minutes <= 0 && seconds <= 0){
        updateTimerDisplay(25, 0)
        return 
      }

      if(seconds <= 0){
        seconds = 60
        --minutes     
      }
      
    updateTimerDisplay(minutes, String(seconds - 1))   
    countdown()
  }, 1000)
}

  function incrementMinutes() {
    minutesDisplay.textContent = String(Number(minutesDisplay.textContent) + 5).padStart(2, "0")
  }

  function decrementMinutes() {
    if(minutesDisplay.textContent > 4) {
      minutesDisplay.textContent = String(Number(minutesDisplay.textContent) - 5).padStart(2, "0")
  }
  else {
    minutesDisplay.textContent = String(Number(60)).padStart(2, "0")
  }
}

   return {
    countdown,
    stopTimer,
    updateTimerDisplay,
    incrementMinutes,
    decrementMinutes,
  }
}