// const apples: number = true --> Error: Type 'boolean' is not assignable to type 'number'
let apples: number = 5
apples = 4

let speed: string = 'fast'
let hasName: boolean = false
hasName = true

let nothingMuch: null = null
let nothing: undefined = undefined

// Annotations: Means we can now only allow an assignment of that type

// Built in objects
let now: Date = new Date()

// Arrays
let color: string[] = [ 'red', 'blue', 'green' ]
let myNumbers: number[] = [ 1, 2, 3 ]

// Classes
class Car {

}
let car: Car = new Car()

// Object Literals
let point: 
{ x: number
  y: number  
} = {
  //  x: 'a' Type string is not assignable to type number
  x: 10,
  y: 20
  // a: 30 Type '{ x: number; y: number; a: number; }' is not assignable to type '{ x: number; y: number; }'.
}
// Functions 
// Ts suggests to use a type, if there isn't one
// There is also, an any type, if we aren't sure on what type we will get
// (i: number) => void
// (List of all parenthesis that I expect) => What is expect to be returned
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}

// When to use annotations
// 1) Function that returns the 'any' type
const json = '{ x = "10", y = "20"}'
// const coordinates = JSON.parse(json)
// If we hover over coordinates, it will have a type of any
// console.log(coordinates)
// TS cannot predict the type of JSON.parse

// coordinates.ferht ==> No such property exist for coordinates, but typescript won't 
// be able to guess that, because it is of any type

// Fix with annotations
const coordinates: { x: number; y: number } = JSON.parse(json)