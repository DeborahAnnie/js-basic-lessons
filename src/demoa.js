/* eslint-disable no-unused-vars */
/* eslint-disable semi */
function add () {
    const x = 100;
    const y = 50;
    // console.log(x + y);
    // document.writeln(x + y);
    var resultelement = document.getElementById('result');
    resultelement.innerText = x + y;
  }
  function sum() {
    var a = parseInt(document.getElementById('firstvalue').value);
    var b = parseInt(document.getElementById('secondvalue').value);
    var resultelement = document.getElementById('result');
    resultelement.innerHTML = a+b;
  }
  function add(a,b){
      var resultelement = document.getElementById('result');
      resultelement.innerText =  parseInt(a) +parseInt(b);
  }
  function addagain(a,b){
      var resultelement = document.getElementById('result');
      resultelement.innerText =  parseInt(a) +parseInt(b);
  }
  function problem1(){
  let i = 0;
  for ( i = 0;i < 100;i++) {
      console.log(i);
  }
  }
  function problem2(){
      let i = 0;
      for ( i = 10;i > 0;i--) {
          console.log(i);
      }
  }
  function problem3(){
      let i = 0;
      for ( i = 0;i <= 100;i++) {
          if (i % 2 === 0){
              console.log(i);
          }
      }
      }
      function printdigits() {
          let x = 945632672;
          let num = x;
          let reminder = 0;
          while(num > 0) {
              reminder = parseInt(num % 10);
              if( reminder % 2 != 0){
              console.log(reminder);
          }
              num = parseInt((num / 10));
           }
      }
      var numb = document.getElementById('fvalue');
      function printdigits1(numb) {
          let num = numb;
          let reminder = 0;
          while(num > 0) {
              reminder = parseInt(num % 10);
              if( reminder % 2 != 0){
              console.log(reminder);
              let res = document.getElementById('digits');
          }
              num = parseInt((num / 10));
           }
      }