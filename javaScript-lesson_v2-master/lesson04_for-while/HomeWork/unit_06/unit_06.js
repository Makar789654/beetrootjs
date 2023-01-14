//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>

function t1() {
    let a = "*";
    for (i=1 ; i<4 ; i++) {
        document.querySelector(".out-1").innerHTML += a ;
    }
    document.querySelector(".out-1").innerHTML += "_" ;
}

document.querySelector('.b-1').onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
    for (i=1 ; i<4 ; i++) {
        document.querySelector(".out-2").innerHTML += + i + "<br>";
    for (c=1 ; c<4 ; c++) {
    let b = "*" ;
    document.querySelector(".out-2").innerHTML += b + "_" }
    document.querySelector(".out-2").innerHTML += "<br>" ;}
}

document.querySelector('.b-2').onclick = t2;


//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
    for (i=1 ; i<5 ; i++) {
    for (c=1 ; c<4 ; c++) {
    let b = "*" ;
    document.querySelector(".out-3").innerHTML += b + "_" }
    document.querySelector(".out-3").innerHTML += "<br>" ;}}


document.querySelector('.b-3').onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
    for (i=1 ; i<4 ; i++) {
        document.querySelector(".out-4").innerHTML += i + "_";
    for (c=1 ; c<6 ; c++) {
    document.querySelector(".out-4").innerHTML += c + "*" }
}}

document.querySelector('.b-4').onclick = t4;


//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
function t5() {
    for ( d=0; d<3 ; d++){
    for (i5 = 0; i5 <= 5; i5++) {
        let b = i5 % 2 ;
        if ( b == 0) { c = "1"}
        else {c = "0"}
        document.querySelector('.out-5').innerHTML += c  ;
   }
   let d = "" ; 
   document.querySelector(".out-5").innerHTML += d +  "<br>" ;}
}

document.querySelector('.b-5').onclick = t5;


//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x


function t6() {
    for (i=0 ; i<3 ; i++) {
        a = "10x01x" ;
        document.querySelector(".out-6").innerHTML += a + "<br>";
}}

document.querySelector('.b-6').onclick = t6;


//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****

function t7() { 
    for (let i = "*"; i.length < 5; i += "*")
    {document.querySelector(".out-7").innerHTML += i + "<br>";}
   }


document.querySelector('.b-7').onclick = t7;


//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *

function t8() {
    for (let i = "*"; i.length < 5; i += "*")
    {document.querySelector(".out-8").innerHTML += i + "<br>";}
   }


document.querySelector('.b-8').onclick = t8;


//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_

function t9() {}
   

document.querySelector('.b-9').onclick = t9;


//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_


function t10() {
    let out10 = "";
    for (let i = 0; i < 5; i++) {
      for (let k = 1; k <= 10; k++) {
        let start = i * 10;
        out10 += k < 10 && i == 0 ? `0${k} ` : `${+start + k} `;
      }
      out10 += "<br>";
    }
    document.querySelector(".out-10").innerHTML = out10;
  }


document.querySelector('.b-10').onclick = t10;