let email = document.getElementById('email');
let firstName = document.getElementById('fName');
let lastName = document.getElementById('lName');
let message = document.getElementById('message');
let form = document.getElementById('myForm');
let radio1 = document.querySelectorAll('input[type="radio');
let checkbox = document.getElementById('checkbox');
// let x1 = document.getElementsById('firstName');
// let LaastName = document.getElementsByClassName('forLastName');
// let Email = document.getElementsByClassName('forEmail');
// let Query = document.getElementsByClassName('forQuery');
// let Consent = document.getElementsByClassName('forConsent');

form.addEventListener("submit", (e) => {
    e.preventDefault();

    if(firstName.value.trim() === ""){
      // alert('here!');
      let merror1 = document.querySelector('p#merror1');
      merror1.style.display='block';
    }
    else if (lastName.value.trim() === ""){
      let merror2 = document.querySelector('p#merror2');
      merror2.style.display='block';
    }
    else if (email.value.trim() === ""){
      let merror3 = document.querySelector('p#merror3');
      merror3.style.display='block';
    }
    else if (message.value.trim() === ""){
      let merror5 = document.querySelector('p#merror5');
      merror5.style.display='block';
    }
    else if (checkbox.checked === false){
      let merror6 = document.querySelector('p#merror6');
      merror6.style.display='block';
    }
    else if(radio1[0].checked === false && radio1[1].checked === false || radio1[0].checked === true && radio1[1].checked === true){
      let merror4 = document.querySelector('p#merror4');
      merror4.style.display='block';
    }
    else{
      let sub = document.getElementById('main-box');
      sub.style.display = 'block'
    }
 })

 
