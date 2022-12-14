let a = 0.1;
let b = 0.2;
console.log((a + b).toFixed(1));

let c = "1";
let d = 2;
console.log(Number(c) + d); 

let flashSize = prompt(
    "What is the size of your flash drive in GB?", 8
  );
  const fileGb = 0.82;
  let files = Math.floor(flashSize / fileGb);
  alert(
    `You can have ${files} files on flash drive with size ${flashSize} GB`
  );
  
let money = Number(
    prompt("How many money you have in your vallet ", 30)
  );
  const chocolatePrice = Number(
    prompt("How much does the chocolate cost?", 10)
  );
    alert(
      `You have ${money} , and you can buy ${Math.floor(
        money / chocolatePrice
      )} chocolats and there will ${(
        money % chocolatePrice
      ).toFixed(2)} change`);
  
  
  let threeNumber;
  let reverceNumber = "";
  do {
    threeNumber = prompt("Give me any three-figure number", 789);
  } while (!threeNumber || threeNumber.length != 3);
  do {
    reverceNumber += (threeNumber % 10);
    threeNumber = Math.floor(threeNumber / 10);
  } while (threeNumber !== 0);
  alert(`This number in reverce will be ${reverceNumber}`);