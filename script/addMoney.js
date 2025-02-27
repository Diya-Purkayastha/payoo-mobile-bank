

document.getElementById('btn-add-money').addEventListener("click", function(event){
    event.preventDefault();

    const account = document.getElementById("acc-number").value;

    const amount = getInputValueById("acc-amount")
    const pin = getInputValueById("acc-pin");
    const mainAmount = getInnerTextById("total-amount");

    const selectBank = document.getElementById("allbank").value;
    console.log(selectBank);

    if(account.length === 11){
        if(pin === 1234){
            const sum = mainAmount + amount;
            setInnerTextByIdandValue("total-amount" , sum)
            
            const transactionContainer = document.getElementById("transaction-container");

            const div = document.createElement("div");
            div.classList.add("bg-yellow-100" , "p-4" , "mt-5");
            div.innerHTML = `
                <h1 class=" font-bold" >Added Money</h1>
                <h3> amount: ${amount} </h3>
                <p> account number: ${account} </p>
                <p>transaction id: </p>
                
            `
        
            transactionContainer.appendChild(div)


        }else{
            alert("pin is not correct")
        }
    }else{
        alert("Acc no is not valid")
    }
})