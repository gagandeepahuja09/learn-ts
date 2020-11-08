// Typed arrays --> Arrays where each element is some consistent type of value  
const carMakers = ['ford', 'toyota', 'chevy']

// Here it's needed. Otherwise an array of type any would be assigned to it.
const cars: string[] = []

const carsByMakers = [
  ['f150'],
  ['corolla'],
  ['camaro']
]