/* eslint-disable semi */
const btn1 = document.querySelector('.btn1');
const coolButton = document.querySelector('.btn2');

function handleClick () {
  console.log('👍 IT GOT CLICKED!!!');
}
btn1.addEventListener('click', handleClick);

const hooray = () => console.log('HOORAY!🙌');
coolButton.addEventListener('click', hooray);

btn1.removeEventListener('click', handleClick);

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick (event) {
  console.log('Buy');
  const button = event.target; // gives reference to dom element
  console.log(button.textContent);
  console.log('Price:' + parseFloat(event.target.dataset.price));
  console.log(event.currentTarget);
  console.log(event.target === event.currentTarget);
  // event.stopPropagation();
}
buyButtons.forEach(function (buyBtn) {
  buyBtn.addEventListener('click', handleBuyButtonClick)
});

const photoEl = document.querySelector('.photo');

photoEl.addEventListener('mouseenter', e => {
  console.log(e.currentTarget);
  console.log(this);
});

window.addEventListener('click',
  function (e) {
    console.log('Window is Clicked');
    // e.stopPropagation();
    console.log('bubbles:' + e.bubbles);
  },
  { capture: true }
);
