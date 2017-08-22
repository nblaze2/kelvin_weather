// Front end web app from scratch Unit 1 Kelvin Weather

// kelvin's value won't change
const kelvin = prompt('What is the Kelvin termperature today?')
// celsius is 273 less than kelvin
let celsius = kelvin - 273
// fahrenheit calc from celsius then rounded
let fahrenheit = Math.floor(celsius * (9/5) + 32)
// log with interpolation
console.log(`The temperature is ${fahrenheit} degrees fahrenheit.`)
