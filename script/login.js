//1. get the button

document.getElementById('login-btn').addEventListener('click', function(event){
    event.preventDefault();
    const accNumber = document.getElementById('acc-number').value;
    const accPin = document.getElementById('acc-pin').value;
    console.log(accNumber, accPin)
    const convertedPin= parseInt(accPin)
    if(accNumber.length === 11){
        if(convertedPin === 1234){
            window.location.href = "./main.html";
        }
        else{
            alert('pin thik nai');
        }
        console.log("number okay")
    }else{
        alert('number not okay')
    }
})