const profile = {
  name: 'alex',
  age: 20,
  coords: {
    lat: 20,
    lng: 15
  },
  setAge(age: number) {
    this.age = age
  }
}

const { age, name } : { age: number, name: string } = profile
const { 
  coords: { lat, lng} 
}: { coords: { lat: number; lng: number } } = profile