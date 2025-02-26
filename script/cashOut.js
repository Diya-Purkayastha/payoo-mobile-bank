
const cashOutBtn = document.getElementById('btn-cashout').       addEventListener('click', function(event){
    event.preventDefault();
    //input field amount
    const addAmount = document.getElementById('cashout-acc-amount').value;
    const convertedAddAmount = parseFloat(addAmount);

    //4500 main balance
    const totalAmount = document.getElementById('total-amount').innerText;
    const convertedTotalAmount = parseInt(totalAmount);

    //pin number
    const accPin = document.getElementById('cashout-acc-pin').value;
    const convertedPin= parseInt(accPin);

    if(addAmount && accPin){
        if(convertedPin === 1234){
            const sub =convertedTotalAmount - convertedAddAmount ;
            document.getElementById('total-amount').innerText = sub;
        }else{
            alert("Invalid pin ");
        }
    }else{
        alert("Amount is not added")
    }
   

   
})