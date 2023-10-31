import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const inputEmail = document.querySelector('input');
const message = document.querySelector('textarea');
//
const formData = {};

form.addEventListener('submit', onFormSubmit);
form.addEventListener('input', throttle(onFormInput, 500));

populateForm();

function onFormSubmit(evt) {
  evt.preventDefault();
  // Виводимо в консоль збережені данні
  // const submitData = JSON.parse(localStorage.getItem('feedback-form-state')); !!!!!!НЕ підходить
  const submitData = {
    [inputEmail.name]: inputEmail.value,
    [message.name]: message.value,
  };
  console.log(submitData);
  // Очищаємо форму і збережені данні в localStorage
  form.reset();
  localStorage.removeItem('feedback-form-state');
}

function onFormInput(evt) {
  formData[evt.target.name] = evt.target.value;
  // викликаємо функцію збереження даних в localStorage
  saveData(formData);
}

function saveData(obj) {
  localStorage.setItem('feedback-form-state', JSON.stringify(obj));
}

// функція заповнення полів форми данними з localStorage
function populateForm() {
  const savedInf = JSON.parse(localStorage.getItem('feedback-form-state'));
  // Якщо в localStorage є збережена інформація, то підставляємо в поля форми
  if (savedInf) {
    inputEmail.value = savedInf.email ? savedInf.email : '';
    message.value = savedInf.message ? savedInf.message : '';
  }
}
