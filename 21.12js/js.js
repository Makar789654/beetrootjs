// let a = 0.1;
// let b = 0.2;
// console.log((a + b).toFixed(1));

// let c = "1";
// let d = 2;
// console.log(Number(c) + d); 

// let flashSize = prompt(
//     "What is the size of your flash drive in GB?", 8
//   );
//   const fileGb = 0.82;
//   let files = Math.floor(flashSize / fileGb);
//   alert(
//     `You can have ${files} files on flash drive with size ${flashSize} GB`
//   );
  
// let money = Number(
//     prompt("How many money you have in your vallet ", 30)
//   );
//   const chocolatePrice = Number(
//     prompt("How much does the chocolate cost?", 10)
//   );
//     alert(
//       `You have ${money} , and you can buy ${Math.floor(
//         money / chocolatePrice
//       )} chocolats and there will ${(
//         money % chocolatePrice
//       ).toFixed(2)} change`);
  
  
//   let threeNumber;
//   let reverceNumber = "";
//   do {
//     threeNumber = prompt("Give me any three-figure number", 789);
//   } while (!threeNumber || threeNumber.length != 3);
//   do {
//     reverceNumber += (threeNumber % 10);
//     threeNumber = Math.floor(threeNumber / 10);
//   } while (threeNumber !== 0);
//   alert(`This number in reverce will be ${reverceNumber}`);


// lesson 3

// let userAge;
// do {
//   userAge = prompt("What is your age?");
// } while (!userAge || userAge <= 0);
// if (userAge <= 11) {
//   alert("Hi, you're under 11 years");
// } else if (userAge <= 17) {
//   alert("Hi, you're teenager!");
// } else if (userAge <= 59) {
//   alert("Hi, you're adult!");
// } else alert("You're on retire");

// function specialCharacter() {
//   let numbers = prompt('Введіть число від 0 до 9');
//   let valid = /^[0-9]+$/g;
//   if(numbers == 0){
//       alert(')')
//   }else if (numbers == 1){
//       alert('!')
//   }else if  (numbers == 2){
//       alert('@')
//   }else if  (numbers == 3){
//       alert('#')
//   }else if  (numbers == 4){
//       alert('$')
//   }else if  (numbers == 5){
//       alert('%')
//   }else if  (numbers == 6){
//       alert('^')
//   }else if  (numbers == 7){
//       alert('&')
//   }else if  (numbers == 8){
//       alert('*')
//   }else if  (numbers == 9){
//       alert('(')
//   }else if  (numbers > 9){
//       alert('Більше 9 не можна !')
//   }else if (valid.test(numbers)){
//   }else{
//       alert('Помилка !')
//   }
// }
// specialCharacter()


// let a=prompt("введіть початок діапазону","")
// let n=prompt("введіть кінець діапазону","")
// let sum=0;
 
// while(a<n){
 
//        a++;
//        sum+=a;    
//     }
 
// alert(sum)

// function NOD (x, y) {
// 	if (y > x) return NOD(y, x);
// 	if (!y) return x;
// 	return NOD(y, x % y);
// }
// console.log(NOD(10, 25));

// function NOD () {
//   let x=prompt("перше число");
//   let y=prompt("second number");
// 	if (y > x) return NOD(y, x);
// 	if (!y) return x;
// 	return NOD(y, x % y);
// }
// alert(NOD)


// (function ()
//     {
//     var str = prompt ('введіть будьяке натуральне число', ''); 
//     if (isNaN (str)) {alert ("its not a number"); return}
//     if (parseInt (str) != str || str <= 0) {alert ('error'); return}
 
//     var j = 0, le = str.length - 1, pal = true;
//     while (j <= le - j) { pal = pal && (str.charAt (j) == str.charAt (le - j)); j++}
//     alert ('its ' + str + (pal ? ' ' : ' не ') + 'palindrom');
//     })();

// let userPurchase;
// let discount;
// let amountPayable;
// do {
//   userPurchase = +prompt("What is your purchase amount ?");
// } while (!userPurchase || userPurchase <= 0);
// if (userPurchase < 200) {
//   discount = 0;
// } else if (userPurchase < 300) {
//   discount = 3;
// } else if (userPurchase < 500) {
//   discount = 5;
// } else {
//   discount = 7;
// }
// amountPayable = ((userPurchase * (100 - discount)) / 100).toFixed(2);
// alert(
//   `Your discount is ${discount}%. Your amount payable is ${amountPayable} dollars`
// );
