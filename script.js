
function validate(e){
    
    removeMessage(); 

    let username = document.getElementById('username');
    let password = document.getElementById('password');
    
    let valid  = true;       
        if ( username.value.length < 3 ){
            username.className = 'output';
            username.nextElementSibling.nextElementSibling.textContent = 'very short username';
            valid = false;
        }
        if ( username.value.length == 0 ){
            username.className = 'output';
            username.nextElementSibling.nextElementSibling.textContent = 'UserName is required'
            valid = false;
        }
        if ( password.value.length == 0 ){
            password.className = 'output';
            password.nextElementSibling.nextElementSibling.textContent = 'Password is required'
            valid = false;
        }        
        // if( valid = true ){
        //     let go = document.getElementById('okay');
        //     go.style.color = 'green';
        //     go.textContent = 'Login Successful'
        //     return false;
        // }  
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
}
