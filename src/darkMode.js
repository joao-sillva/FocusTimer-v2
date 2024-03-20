export function DarkMode({
  minutesDisplay,
  secondsDisplay,
  btnPlayPath,
  btnStopPath,
  btnPlusPath,
  btnMinusPath,
}) {
  const separationMinutesSeconds = document.querySelector(".separation-minutes-seconds")
  const lightIcon = document.querySelector(".light-icon")
  const darkIcon =document.querySelector(".dark-icon")

  function switchLightDarkModes() {
    lightIcon.classList.toggle("hide")
    darkIcon.classList.toggle("hide")
  }

  lightIcon.addEventListener("click", function() {
    switchLightDarkModes()
    minutesDisplay.style.color ="#FFF"
    separationMinutesSeconds.style.color ="#FFF"
    secondsDisplay.style.color ="#FFF"
  
    btnPlayPath.style.fill = "#C4C4CC"
    btnStopPath.style.fill = "#C4C4CC"
    btnPlusPath.style.fill = "#C4C4CC"
    btnMinusPath.style.fill = "#C4C4CC"
  
    document.body.style.backgroundColor = "#121214"
  })

  darkIcon.addEventListener("click", function() {
    switchLightDarkModes()
    minutesDisplay.style.color ="#323238"
    separationMinutesSeconds.style.color ="#323238"
    secondsDisplay.style.color =" #323238"

    btnPlayPath.style.fill = "#323238"
    btnStopPath.style.fill = "#323238"
    btnPlusPath.style.fill = "#323238"
    btnMinusPath.style.fill = "#323238"
  
    document.body.style.backgroundColor = "#FFF"
  })
}