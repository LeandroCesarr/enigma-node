import axios from 'axios';
const api = 'http://localhost:4000/admin/login'

export default () => {
  const form = document.querySelector('[data-auth]');

  async function submitForm(e) {
    e.preventDefault();
    const payload = {
      username: form.querySelector('[name=username]').value,
      password: form.querySelector('[name=password]').value
    };

    try {
      const response = await axios.post(api, payload);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  function setupListener() {
    form.addEventListener('submit', submitForm);
  }

  function init() {
    setupListener();
  }

  init();
}