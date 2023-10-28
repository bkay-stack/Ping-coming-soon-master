const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('button');
const errorMsg = document.querySelector('.error');
const borderError = document.querySelector('.border-error')




    //   Email Validate  

// const emailValue = input.value.trim();

// const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  btn.addEventListener('click', (e) => {
      if (input.value === '') {
         e.preventDefault();
         errorMsg.style.display = 'block';                      
         borderError.style.border = '1px solid hsl(354, 100%, 66%)';
         setTimeout(() => {
            errorMsg.style.display = 'none';  
            borderError.style.border = '';
            const clear = input.value = '';
         
         },1000)
      }  
  })
