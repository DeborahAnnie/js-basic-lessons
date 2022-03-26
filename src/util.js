export function printEvenNos () { //only function marked as export can be imported by another function
    for (let index = 1; index <= 100; index++) {
      if (index % 2 === 0) {
        console.log(index)
      }
    }
  }