const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const errorMsg = document.querySelector('.error');




    //   Email Validate  

// const emailValue = input.value.trim();
// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  btn.addEventListener('click', (e) => {
      if (input.value === '') {
         e.preventDefault();
         errorMsg.style.display = 'block';
         setTimeout(() => {
            errorMsg.style.display = 'none';
            console.log(errorMsg);
         },1000)
      } else {
          errorMsg.style.display = 'none'
      }
  })
