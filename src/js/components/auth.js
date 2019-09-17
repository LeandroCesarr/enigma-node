import axios from 'axios';

export default () => {
  const form = document.querySelector('[data-auth]');

  async function submitForm(e) {
    e.preventDefault();
    const payload = {
      username: form.querySelector('[name=username]').value,
      password: form.querySelector('[name=password]').value
    };

    try {
      await axios.post(`${api}/admin/login`, payload);
      window.location.href = `${api}/admin/dashboard`;
    } catch (error) {
      alert('Errrrou');
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