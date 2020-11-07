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
