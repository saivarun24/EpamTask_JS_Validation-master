
function validate(){
    let username = document.getElementById('username')
    let email = document.getElementById('email');
    let mobile = document.getElementById('mobile');
    let pwd = document.getElementById('pwd');
    let cpwd = document.getElementById('cpwd');
    let tc = document.getElementById('tc');
    let valid = true;
    removeMessage();

    if( username.value.length < 6 ){
        username.className = 'output';
        username.nextElementSibling.textContent = 'Username must be atleast 6 characters long';
        valid = false;
    }
    if( username.value.length == 0 ){
        username.className = 'output';
        username.nextElementSibling.textContent = 'Username is required';
        valid = false;
    }
    var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    if ((reg.test(email.value) == false)) 
    {
        email.className = 'output';
        email.nextElementSibling.nextElementSibling.textContent = 'Invalid Email Format';
        valid = false;   
    }
    if( mobile.value.length == 0 ){
        mobile.className = 'output';
        mobile.nextElementSibling.nextElementSibling.textContent = 'Mobile Number is required';
        valid = false;
    }
    if(  (mobile.value.length > 0) && (mobile.value.length < 10) ){
        mobile.className = 'output';
        mobile.nextElementSibling.nextElementSibling.textContent = 'Number is less than 10 digits';
        valid = false;
    }
    if( mobile.value.length > 10 ){
        mobile.className = 'output';
        mobile.nextElementSibling.nextElementSibling.textContent = 'Number is more than 10 digits';
        valid = false;
    }
    let y = pwd.value;
    if( y.search (/[0-9]/) == -1 ){
        pwd.className = 'output';
        pwd.nextElementSibling.nextElementSibling.textContent = 'Password must have atleast 1 digit';
        valid = false;
    }
    if( y.search(/[A-Z]/) == -1 ){
        pwd.className = 'output';
        pwd.nextElementSibling.nextElementSibling.textContent = 'Password must have atleast 1 upper case letter';
        valid = false;
    }
    if( pwd.value.length < 6 ){
        pwd.className = 'output';
        pwd.nextElementSibling.nextElementSibling.textContent = 'Password must br atleast 6 characters long';
        valid = false;
    }
    if( pwd.value.length == 0 ){
        pwd.className = 'output';
        pwd.nextElementSibling.nextElementSibling.textContent = 'Password Field is required';
        valid = false;
    }
    if( cpwd.value != pwd.value  ){
        cpwd.className = 'output';
        cpwd.nextElementSibling.nextElementSibling.textContent = "Password's do not match";
        valid = false;
    }
    if( tc.checked != true ){
        ele = document.querySelector('.errors')
        ele.textContent = 'Please Agree!'
    }
  
    return valid;
}


function removeMessage(){
    let errors = document.querySelectorAll('.output');
    errors.forEach.call( errors, function(e){
        e.classList.remove('output');
    } );

    let etext = document.querySelectorAll('.error');
    etext.forEach.call( etext, function(e){
        e.textContent = '';
    } );
    let ftext = document.querySelectorAll('.ferror');
    ftext.forEach.call( ftext, function(e){
        e.textContent = '';
    } );
    let ltext = document.querySelectorAll('.lerror');
    ltext.forEach.call( ltext, function(e){
        e.textContent = '';
    } );
    let check = document.querySelectorAll('.errors');
    check.forEach.call( check, function(e){
        e.textContent = '';
    } );
}

