/* eslint-disable semi */
const people = [
  { name: 'John', cool: true, country: 'Canada' },
  { name: 'Scott', cool: true, country: 'USA' },
  { name: 'Jimmy', cool: false, country: 'Rajapalayam' }
]

people.forEach((person, index) => {
  console.table(index, person.name, person.cool, person.country)
})

// eslint-disable-next-line no-unused-vars
function certify (name) {
  console.count(`Certifying Dotor degree for ${name}`);
  return `Dr. ${name}`;
}
