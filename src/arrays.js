const names = ['John', 'Sam', 'Peter'];

console.log(names[0]);
console.log(names.length);
console.log(names[names.length -1]);

// methids of array
names.push('Suresh');
console.log('After push: ' + names);
//push will add the item at the end

//... is called as the spread operator
//it represents the entire item in the array
const names2=[...names, 'Raj'];
console.log('names2: ' + names2);

names.unshift('Poppy');
console.log('unshift: ' + names);
// unshift adds  the data to the beginning of the array,so the index of values will change now

const names3 = ['raj', ...names];
console.log(names3);
// add data at the beginning

//method slice()
const bikes=['binachi', 'miele', 'panasonic', 'miyata', 'RE'];
const b1 = [...bikes.slice(0,2)]; //mutable

console.log(b1);
// slice takes 2 parameters 'from,to' , it has copied 2 values from index0 and assinged to b1
const b2 = [...bikes.slice(3)];
console.log(b2); //from 3rd index

const newBikes = [
    ...bikes.slice(0,2),
    'benotto',
    ...bikes.slice(2)
];
console.log('newBikes: '+ newBikes);
//new array is created then in index 0 and 1 values from array bikes is copied using the slice method
// the first two values are copied , in the 2nd index 'benotto' is pushed, the from third index it is copied from bikes array using slice method.
const newBikes2 = [
    ...newBikes.slice(0,3),
    ...newBikes.slice(4)
];
console.log('newBikes2: '+ newBikes2);

const indexOfSam = names.findIndex(name => name === 'Sam');
console.log('IndexOfSAM: ' + indexOfSam);

function deleteName(nametodelete, names) {
    const indexOfname = names2.findIndex( name => name === nametodelete);
    console.log('indexOf name to delete:' + indexOfname);
    const names4 = [
        ...names2.slice(0, indexOfname),
        ...names2.slice(indexOfname+1)
    ];
return names4;
};
const deletedNames = deleteName('Peter', names2);
console.log('After Delete:' + deletedNames);
console.log('Before Delete:' + names2);
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
// numbers.splice(3,2); // from 3rd index delete the next 2 values
// console.log(numbers);
//so slice modifies the array on which it is called
//splice delete the data from the index it is declared to how many number of values to be deleted
const pizzaSlice = numbers.slice(2,4); //immutable
console.log('pizzaSlices: ' + pizzaSlice);
console.log('Original Numbers: ' + numbers); */
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// anytime u want to use a mutation method and NOT mutate the original array
//we need to take a copy of the array
const numbersReversed = [...numbers].reverse();
console.log(numbersReversed);

