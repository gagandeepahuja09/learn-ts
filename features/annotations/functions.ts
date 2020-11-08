// We have to add type annotation here
// As soon as we add the type of return value, we get an error
// A fn whose declared type is neither null nor any, must return a value
const add = (a: number, b: number): number => {
  return a + b
}

// There is no type inference for arguments, we have to use annotations 
// Type inference works for output(return), but we won't use it

// const subtract = (a: number, b: number) => {
//   a - b
//   // Now, type inference will assign it type void
// }

const subtract = (a: number, b: number): number => {
  // a - b
  // // Now we get an error as expected
  return a - b
}

function divide(a: number, b: number): number {
  return a / b
}

const multiply = function multiply(a: number, b: number): number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message)
  // return undefined / null
}

const throwError = (message: string): never => {
  throw new Error(message)
}

const todaysWeather = {
  date: new Date(),
  weather: 'sunny'
}

// Destructuring with annotations
const logWeather = ({ date, weather }: { date: Date, weather: String }) => {
  console.log(date, weather)
}

logWeather(todaysWeather)