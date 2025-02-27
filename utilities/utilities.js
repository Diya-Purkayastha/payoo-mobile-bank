//Shared functions 

//converting input value into integer
function getInputValueById(id){
  const value =  document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
}

//converting innertext into integer
function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseInt(value);
    return convertedValue;
}

//set the value into innertext
function setInnerTextByIdandValue(id, value){
    document.getElementById(id).innerText = value;   
}