import throttle from 'lodash.throttle'

const refs = {
    form: document.querySelector('.feedback-form'),
    email: document.querySelector('[name = "email"]'),
    message: document.querySelector('[name = "message"]'),
};



const STORAGE_DATA = 'feedback-data';
let dataSave = {};

populateInput();

refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSubmit);

function onFormInput(evt) {
    dataSave = JSON.parse(localStorage.getItem(STORAGE_DATA)) || {}; // не розумію!!!
    
    dataSave[evt.target.name] = evt.target.value;

    localStorage.setItem(STORAGE_DATA, JSON.stringify(dataSave));

    
}

function onFormSubmit(evt) {
    evt.preventDefault();

    evt.currentTarget.reset();

    localStorage.removeItem(STORAGE_DATA);

}

function populateInput() {
    const savedLocalData = JSON.parse(localStorage.getItem(STORAGE_DATA));
    
    if (savedLocalData) {
        refs.email.value = savedLocalData.email;
        refs.message.value = savedLocalData.message;
    }
}