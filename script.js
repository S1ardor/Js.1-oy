var firstName = prompt("Ismingizni kriting: ");
var surName = prompt("Familyangizni kriting: ");
var userAge = prompt("Yohingizni kriting: ");
var userPhone = prompt("Telefon nomeringizni kriting: ");
var userEmail = prompt("Email ni kriting: ");
var userMoney = prompt("Sizning qancha dolloringiz bor: ");
var DOLLOR_UZS = 12400;
var sum = (userMoney) * DOLLOR_UZS;

console.log(`
  User name: ${firstName} 
  User surname: ${surName} 
  User age: ${userAge} 
  User phone: ${userPhone} 
  User email: ${userEmail} 
  User money: ${(userMoney)}
  User sum:   ${(sum)}  
  `);
