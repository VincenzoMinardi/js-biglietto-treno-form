const numberKmElement = document.querySelector ('#number-km')

const userAgeElement = document.querySelector ('#user-age')

const generates = document.querySelector('#generates');

// console.log ('prova')

generates.addEventListener('click', function() {

   // console.log ('prova2')
const numberKm = parseInt(numberKmElement.value)

const userAge = parseInt(userAgeElement.value)

	
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

});






 

 








    


  

   



 



