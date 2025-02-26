
document.getElementById('Cashout').style.display= 'none';

document.getElementById('add-money-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display= 'block';
    document.getElementById('Cashout').style.display= 'none';

})
document.getElementById('cashout-box').addEventListener('click', function(){
    document.getElementById('add-money').style.display= 'none';
    document.getElementById('Cashout').style.display= 'block';

})