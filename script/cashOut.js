document.getElementById("btn-cashout").addEventListener("click" , function(event){
    event.preventDefault();
    const accNumber = document.getElementById("acc-number").value;
    const amount = getInputValueById("cashout-acc-amount");
    const pin = getInputValueById("cashout-acc-pin");
    const mainAmount = getInnerTextById("total-amount");

    if(amount < 0){
        alert("amount cannot be negative");
        return;
    }
    if(amount > mainAmount){
        alert("Invalid amount, Main amount exceed");
        return;
    }
   if(amount && pin && accNumber.length === 11 ){
    if(pin === 1234){
        const sub = mainAmount - amount;
        if(sub>0){
            setInnerTextByIdandValue('total-amount' , sub);
        }else{
            setInnerTextByIdandValue('total-amount' , 0);
        }
        
        //transaction handling
        const transactionContainer = document.getElementById("transaction-container");
        const div = document.createElement("div");
        div.classList.add("bg-yellow-100" , "p-4" , "mb-2");
        div.innerHTML = `
            <h1 class=" font-bold" >Cashout Money</h1>
            <h3> amount: ${amount} </h3>
            <p> account number: ${accNumber} </p>
            <p>transaction id: </p>
            
        `
        transactionContainer.appendChild(div)

    }else{
        alert("invalid pin")
    }
   }else{
    alert("enter pin and amount")
   }
})