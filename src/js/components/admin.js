import axios from 'axios';

function admin(el) {
  const elm = el;
  const path = `/secret/api/${elm.getAttribute('data-form')}`;

  async function submit(e) {
    e.preventDefault();
    const form = new FormData(elm);
    const fileInput = elm.querySelector('[name=image]');

    form.set('image', fileInput.files[0], fileInput.files[0].name);

    try {
      const response = await axios.post(path, form);
      alert(response);
    } catch (err) {
      alert(err);
    }
  }

  function init() {
    elm.addEventListener('submit', submit);
  }

  init();
}

export default {
  init() {
    const elms = Array.from(document.querySelectorAll('[data-form]'));
    const instances = [];

    elms.forEach(elm => instances.push(admin(elm)));
  }
}