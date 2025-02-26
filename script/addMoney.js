
const addMoneyBtn = document.getElementById('btn-add-money').       addEventListener('click', function(event){
    event.preventDefault();
    //input field amount
    const addAmount = document.getElementById('acc-amount').value;
    const convertedAddAmount = parseFloat(addAmount);

    //4500 main balance
    const totalAmount = document.getElementById('total-amount').innerText;
    const convertedTotalAmount = parseInt(totalAmount);

    //pin number
    const accPin = document.getElementById('acc-pin').value;
    const convertedPin= parseInt(accPin);

    if(addAmount && accPin){
        if(convertedPin === 1234){
            const sum = convertedAddAmount + convertedTotalAmount;
            document.getElementById('total-amount').innerText = sum;
        }else{
            alert("Invalid pin ");
        }
    }else{
        alert("Amount is not added")
    }
   

   
})