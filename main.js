const form = document.getElementById('form-maior');
const errorMessage = 'O número do campo B precisa ser maior';
const successMessage = 'Formulário validado com sucesso!';

function validaFormulario(){
    let numberA = document.getElementById('number-a');
    let numberB = document.getElementById('number-b');

    if(numberB.value > numberA.value){
        const containerSuccessMessage = document.querySelector('.success-message');
        containerSuccessMessage.innerHTML = successMessage;
        containerSuccessMessage.style.display = 'block';
        numberA.value = '';
        numberB.value = '';
    }
    else{
        const containerErrorMessage = document.querySelector('.error-message');
        containerErrorMessage.innerHTML = errorMessage;
        numberA.style.border = '1px solid red';
        numberB.style.border = '1px solid red';
        containerErrorMessage.style.display = 'block';
    }

}

form.addEventListener('submit',function (e){
    e.preventDefault();
    validaFormulario();
})