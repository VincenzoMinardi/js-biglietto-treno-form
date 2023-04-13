const numberKm = parseInt(prompt('Salve, Quanti km deve percorrere?'));
console.log(numberKm);

const userAge = parseInt(prompt("Perfetto! Mi dica la sua età"));
console.log(userAge);

const price =(0.21);
console.log(price * numberKm);

const totalPrice =(numberKm * price)

 if (userAge < 18) {
    console.log (  totalPrice - totalPrice * 20 / 100);
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice - totalPrice * 20 / 100)
 }
 else if(userAge >= 65){
    console.log (  totalPrice - totalPrice * 40 / 100);
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice - totalPrice * 40 / 100)
 }
 
 else {
    console.log(totalPrice)
    document.getElementById ('price').innerHTML = ( ' ' + totalPrice)
 }







    


  

   



 



