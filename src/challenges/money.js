export function calculate() {
    Math.random();
    let x = document.forms["myForm"]["currency"].value;
    let y = document.forms["myForm"]["toconversion"].value;
    let input = document.forms["myForm"]["inputval"].value;
    let output = Math.random();
    document.getElementById('converted').value = `$${output}`;
  }