import 'the-new-css-reset/css/reset.css';
import '../styles/style.scss';

const setupCounter = (element) => {
  let counter = 0;
  const counterElement = element;
  const setCounter = (count) => {
    counter = count;
    counterElement.innerHTML = `count is ${counter}`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
};

setupCounter(document.querySelector('#counter'));

document.querySelector('.tags').innerHTML = dependencies.map((dependency) => `<p>${dependency}</p>`).join('');
