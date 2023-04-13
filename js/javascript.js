const numberKm = parseInt('Salve, Quanti km deve percorrere?');
console.log(numberKm);


const userAge = parseInt("Perfetto! Mi dica la sua età");
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

 const eleBtnRandom = document.querySelector('#generates');

eleBtnRandom.addEventListener('click', function() {
	console.log('');
	const randomNumber = Math.random();
	alert(randomNumber);
});




 

 








    


  

   



 



