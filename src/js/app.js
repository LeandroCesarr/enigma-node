import axios from 'axios';
import Cookie from 'js-cookie';

(function() {
  function checkAnswer() {
    const button = document.querySelector('[data-button]');
  
    button.addEventListener('click', () =>{
      const data = document.querySelector('[data-input]').value;
      let question = button.getAttribute('question');
      let cookieData = question.replace('/secret_', '');
       
      cookieData = parseInt(cookieData);
      question = question.replace(/\//, '');


      axios.get(`/api?question=${question}&answer=${data}`)
        .then((response) => {
          console.log(response);
          if (response.data.result) {
            Cookie.set('secret', cookieData + 1, { expires: 365 });

            window.location =  window.location.href.replace(/\d$/, cookieData + 1);
          }
        })
    });
  }
  
  checkAnswer();
})();