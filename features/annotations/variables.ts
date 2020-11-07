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
let point: { x: number
   y: number  } = {
    //  x: 'a' Type string is not assignable to type number
    x: 10,
    y: 20
    // a: 30 Type '{ x: number; y: number; a: number; }' is not assignable to type '{ x: number; y: number; }'.
  }