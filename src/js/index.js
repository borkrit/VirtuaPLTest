/* Here goes your JS code */

const checkbox = document.getElementById('checkbox');
const btnSubmit = document.getElementById('btn-submit');
const btnCloseForm = document.getElementById('close');
const form = document.getElementById('form-login');
const btnOpenForm = document.getElementById('show-popup-form');
const pop = document.getElementById('popup');
const success = document.getElementById('success');



btnOpenForm.addEventListener('click',()=>{
    pop.removeAttribute('hidden');
    btnOpenForm.setAttribute('hidden',true)
})

btnCloseForm.addEventListener('click',()=>{
    pop.setAttribute('hidden',true)
    btnOpenForm.removeAttribute('hidden')
})


function onClickChangeChekBox (){
    checkbox.checked ? btnSubmit.removeAttribute('disabled') : btnSubmit.setAttribute('disabled',true)
}


form.onsubmit = submit


function submit (event){
    pop.style.cursor='wait';
   setTimeout(()=>{
    form.setAttribute('hidden','');
    success.removeAttribute('hidden');
   },3000)
   
   event.preventDefault();
}

