/* Here goes your JS code */

const checkbox = document.getElementById('checkbox');
const btnSubmit = document.getElementById('btn-submit');
const btnCloseForm = document.getElementById('close');
const form = document.getElementById('form-login');

btnCloseForm.addEventListener('click',()=>{
    form.style.display = 'none';
})


function onClickChangeChekBox (){
    checkbox.checked ? btnSubmit.removeAttribute('disabled') : btnSubmit.setAttribute('disabled',true)

}


