export function Sound() {
  const forestSound = new Audio("./assets/forest.wav")
  const rainSound = new Audio("./assets/rain.wav")
  const coffeeTableSound = new Audio("./assets/coffee-shop.wav")
  const firePlaceSound = new Audio("./assets/fireplace.wav")

  forestSound.loop = true
  rainSound.loop = true
  coffeeTableSound.loop = true
  firePlaceSound.loop = true

  return {
    forestSound,
    rainSound,
    coffeeTableSound,
    firePlaceSound,
  }
}