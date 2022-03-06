const form=document.getElementById('form');
const username=document.getElementById('username');
const password=document.getElementById('password1');
const password2=document.getElementById('password2');
const submit = document.getElementById('submit');

function showError(input,message){
    const formControl=input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl=input.parentElement;
    formControl.className='form-control success';

}
form.addEventListener('input', () => {
    if (username.value.length > 0 && password1.value.length > 0 && password2.value.length > 0 ){
        submit.removeAttribute('disabled');
    }
    else{
        submit.setAttribute('disabled', 'disabled');
    }
});
form.addEventListener('submit',function(e){
    e.preventDefault();


    if(username.value===''){
        showError(username,'Username is required');

        }
    else{
        showSuccess(username);
        }
    if(password1.value===''){
        showError(password1,'Password is required');

    }
    else{
        showSuccess(password1);
    }
    if(password2.value===''){
        showError(password2,'Confirm password is required');


    }
    else{
        showSuccess(password2);

    }
    if (password2.value != password1.value){
        showError(password2,'Passswords do not match');
    }
    else {
        showSuccess(password2);
    }

});
function getFocus(x){
    x.style.background = "#cfe2ff";
}
function Blur(x){
    x.style.background = "#ffff";
}
var audio = new Audio("TokyoDrift.mp3");
audio.oncanplaythrough = function(){
audio.play();
}
$("#darc").on("click",function(){
  if($("body").hasClass("dark-mode")){
    $("body").removeClass("dark-mode");
    $("#darc").text("DARK MODE");
  }
  else{
    $("body").addClass("dark-mode");
    $("#darc").text("WHITE MODE");
  }
});

var state= false;
function toggle1(){
    if(state){
 document.getElementById("password1").setAttribute("type","password");
 document.getElementById("eye1").style.color='#7a797e';
 state = false;
     }
     else{
 document.getElementById("password1").setAttribute("type","text");
 document.getElementById("eye1").style.color='#5887ef';
 state = true;
     }
}

var state= false;
function toggle2(){
    if(state){
 document.getElementById("password2").setAttribute("type","password");
 document.getElementById("eye2").style.color='#7a797e';
 state = false;
     }
     else{
 document.getElementById("password2").setAttribute("type","text");
 document.getElementById("eye2").style.color='#5887ef';
 state = true;
     }
}
