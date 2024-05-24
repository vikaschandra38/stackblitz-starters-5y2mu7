const checkValue = document.querySelector('#check-value');

const first = document.querySelector('#first');
const second = document.querySelector('#second');

const firstContent = document.querySelector('#first-content');

const secondContent = document.querySelector('#second-content');

function handleCheckbox(event) {
  let values = [];

  if (first.checked) {
    values.push('FOURTYFIVE');
    firstContent.classList.remove('hide');
  } else {
    firstContent.classList.add('hide');
  }

  if (second.checked) {
    values.push('TWENTY');
    secondContent.classList.remove('hide');
  } else {
    secondContent.classList.add('hide');
  }

  checkValue.textContent = values.join(', ') || ' ________ ';
}

[first, second].forEach((item) => {
  item.addEventListener('change', handleCheckbox);
});
