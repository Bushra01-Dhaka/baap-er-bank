document.getElementById('btn-submit').addEventListener('click', function(){
    //get email
    const emailField = document.getElementById('user-email');
    const email = emailField.value;
    //get password
    const passwordField = document.getElementById('user-password');
    const password = passwordField.value;
    // console.log(email,password);

    //dangerous : don't verify email password on the client side
    //verify email and password
    if(email === 'sontan@baap.com' && password === 'secret')
    {
        console.log('Valid User');
        location.href="../bank.html";
    }
    else 
    {
        alert('Tui password vule gesos!!!!!! Toke tejjo sontan ghosona korlam')
    }
})