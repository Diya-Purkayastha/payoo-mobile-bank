//initial status
document.getElementById('cashout').style.display = 'none';
document.getElementById('transaction').style.display = 'none';
document.getElementById('transfer-money').style.display = 'none';

//toggle handle function
function toggleHandle(id, status){
    document.getElementById(id).style.display = status;
}


//calling 
document.getElementById('add-money-box').addEventListener("click", function(){

    //toggleHandle (id, status)
    toggleHandle('add-money' , 'block');
    toggleHandle('cashout' , 'none');
    toggleHandle("transaction" , "none");
    toggleHandle("transfer-money" , "none");
})

document.getElementById('cashout-box').addEventListener("click", function(){

    //toggleHandle (id, status)
    toggleHandle('add-money' , 'none');
    toggleHandle('cashout' , 'block');
    toggleHandle("transaction" , "none");
    toggleHandle("transfer-money" , "none");
})

document.getElementById("transaction-box").addEventListener("click" , function(){
    toggleHandle("add-money" , "none");
    toggleHandle("cashout" , "none");
    toggleHandle("transaction" , "block");
    toggleHandle("transfer-money" , "none");
    
})

document.getElementById("transfer-box").addEventListener("click" , function(){
    toggleHandle("add-money" , "none");
    toggleHandle("cashout" , "none");
    toggleHandle("transaction" , "none");
    toggleHandle("transfer-money" , "block");
    
})

