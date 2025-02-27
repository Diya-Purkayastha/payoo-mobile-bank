

document.getElementById("btn-transfer").addEventListener("click" , function(event){
        event.preventDefault();

        const account = document.getElementById("acc-number").value;

        const amount = getInputValueById("transfer-amount");
        const pin = getInputValueById("transfer-acc-pin");
        const mainAmount = getInnerTextById("total-amount");

        if(mainAmount < amount){
            alert("Amount exceed main balance");
        }
        if(amount < 0 ){
            alert("amount cannot be a negative value");
        }

        if(amount && pin && account.length === 11){
            if(pin === 1234){
                const sub = mainAmount - amount;
                setInnerTextByIdandValue("total-amount", sub);

                   //transaction handling
                    const transactionContainer = document.getElementById("transaction-container");

                    const div = document.createElement("div");
                    div.classList.add("bg-yellow-100" , "p-4" , "mt-5");
                    div.innerHTML = `
                        <h1 class=" font-bold" >Transfer Money</h1>
                        <h3> amount: ${amount} </h3>
                        <p> account number: ${account} </p>
                        <p>transaction id: </p>
                        
                    `
                    transactionContainer.appendChild(div)

            }else{
                alert("wrong pin");
            }
        }else{
            alert("Check again credentials ");
        }
})