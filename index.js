const { hash } = window.location;

const message = atob(hash.replace('#', ''));

if(message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
};

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input1 = document.querySelector('#message-input');
    const encrypted = btoa(input1.value);

    const input2 = document.querySelector('#link-input');
    input2.value = `${window.location}#${encrypted}`;
    input2.select();
});