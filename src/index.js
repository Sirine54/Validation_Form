////////////////////DOM/////////////////////////
const container = document.getElementById('container')
const form = document.getElementById('form')

const userName = document.getElementById('name');
const email = document.getElementById('email');
const country = document.getElementById('country');
const textCountry = document.getElementById('textCountry')
const zip = document.getElementById('zip')
const password = document.getElementById('password')
const confirmPass = document.getElementById('confirmPass');

const show = document.getElementById('show');
const hide = document.getElementById('hide');



const btnSub= document.getElementById('submit')



/////////////// clear All ////////////////////


function clearAll(){
    userName.value=''
    email.value=''
    country.value = textCountry.value;
    zip.value = ''
    password.value = ''
    confirmPass.value = ''

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    formControl.classList.remove('success')  //formControl.className ='control-form success'
    formControl.classList.remove('error'); 
    small.innerText=''
}


///////////check Inputs///////////////

btnSub.addEventListener('click',(e)=>{
    e.preventDefault();
     checkInputs();
  
    
});


////////////////////////////////////////////////


function checkInputs(){
    const userNameVal = userName.value.trim();//trim() remove white space
    const emailVal = email.value.trim();
    const zipVal = zip.value.trim();
    const passwordVal = password.value.trim();
    const confirmVal = confirmPass.value.trim();

    if(userNameVal ===''){
       
        errorForm(userName,'Username is required !!')
       
    }else{
        successForm(userName)
    }

    if(emailVal ===''){
        errorForm(email,'Email is required !!')
    }else if(!checkEmail(emailVal)){
        errorForm(email,'Email not valid !!')
    }else{
        successForm(email)
    }

    if(zipVal===''){
        errorForm(zip,'Zip is required !!')
    }else{
        successForm(zip)
    }

    if(passwordVal ===''){
        errorForm(password,'Password is required !!')
        
        
    }else if(passwordVal.length < 8){
        
        errorForm(password,'Password must be more than 8 digits')
        
    }
    else{
        successForm(password)
    }

    if(confirmVal===''){
        errorForm(confirmPass,'Password is required !!')
        
    }else if(confirmVal!==passwordVal){
        errorForm(confirmPass,'Password does not match')
        
    }else{
        successForm(confirmPass)
    }
    if(country.value === textCountry.value){
        errorForm(country,'Country is required !!')
    }else{
        successForm(country)
    }

    if(userNameVal!='' && emailVal!='' && country!=textCountry && zipVal!='' && passwordVal!='' && confirmVal!='' && passwordVal==confirmVal){
        alert("registration done !!")
      
    }
    
  
}


///////////////Error Message///////////////////////// 


function errorForm(input,message){
    const formControl = input.parentElement; // .control-form
    const small = formControl.querySelector('small')

    small.innerText = message;
    
    //formControl.className ='control-form error'
    formControl.classList.add('error');
    formControl.classList.remove('success')
    show.style.right ="5px"
    hide.style.right ="5px"
    
    shakeError()
}



///////////////Success inputs ///////////////////////////


function successForm(input){

    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    formControl.classList.add('success')  //formControl.className ='control-form success'
     formControl.classList.remove('error');  
    small.innerText=''
    
    show.style.right ="5px"
    hide.style.right ="5px"
}


////////////////Check email characters////////////////////


function checkEmail(email){
    return `/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(${email})`;

}


///////////////////Add vibration when all error exist ///////////////////////

function shakeError(){
    container.classList.add("shake")
}


///////////////////Show and Hide password //////////////////////////

show.addEventListener('click',showPass)

function showPass(){
  if (password.type === "password") {
    password.type = "text";
    show.classList.toggle('show')
    hide.classList.toggle('hide')
  } else{
      hidePass()
  }
}

hide.addEventListener('click',hidePass)

function hidePass(){
    if(password.type="password"){
        show.classList.remove('show')
     hide.classList.toggle('hide')
    }else{
        showPass()
    }
}



