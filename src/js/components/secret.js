import axios from 'axios';
import Cookie from 'js-cookie';

export default function secret() {
  const elm = document.querySelector('[data-secret]');
  const button = elm.querySelector('[data-submit]');

  function setupListener() {
    button.addEventListener('click', () =>{
      const data = document.querySelector('[data-input]').value;
      let question = parseInt(button.getAttribute('data-submit'));

      axios.get(`/secret/api/check?id=${question}&answer=${data}`)
        .then((response) => {
          console.log(response);
          if (response.data.result) {
            Cookie.set('secret', question + 1, { expires: 365 });

            window.location =  window.location.href.replace(/\d$/, question + 1);
          } else {
            alert('Errrou otario');
          }
        })
    });
  }

  function init() {
    setupListener()
  }

  init()
}