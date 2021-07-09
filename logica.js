//-----------------------------------variables-------------------------------------
let vista = document.getElementById("vista");
let muestra = document.getElementById("muestra");
let btn1 = document.getElementById("1");
let btn2 = document.getElementById("2");
let btn3 = document.getElementById("3");
let btn4 = document.getElementById("4");
let btn5 = document.getElementById("5");
let btn6 = document.getElementById("6");
let btn7 = document.getElementById("7");
let btn8 = document.getElementById("8");
let btn9 = document.getElementById("9");
let btn0 = document.getElementById("0");
let btnIgual = document.getElementById("igual");
let btnPunto = document.getElementById("punto");
let btnSuma = document.getElementById("suma");
let btnResta = document.getElementById("menos");
let btnMultiplicacion = document.getElementById("multiplicacion");
let btnDivision = document.getElementById("division");
let btnC = document.getElementById("c");
let btnCe = document.getElementById("ce");

//-------------------------------------funciones--------------------------------------
const fn1 = () => {
    muestra.innerHTML += "1";
};

const fn2 = () => {
    muestra.innerHTML += "2";
};

const fn3 = () => {
    muestra.innerHTML += "3";
};

const fn4 = () => {
    muestra.innerHTML += "4";
};

const fn5 = () => {
    muestra.innerHTML += "5";
};

const fn6 = () => {
    muestra.innerHTML += "6";
};

const fn7 = () => {
    muestra.innerHTML += "7";
};

const fn8 = () => {
    muestra.innerHTML += "8";
};

const fn9 = () => {
    muestra.innerHTML += "9";
};

const fn0 = () => {
    muestra.innerHTML += "0";
};

const fnIgual = () => {
    muestra.innerHTML += "=";
};

const fnPunto = () => {
    muestra.innerHTML += ".";
};

const fnSuma = () => {
    muestra.innerHTML += "+";
};

const fnResta = () => {
    muestra.innerHTML += "-";
};

const fnMultiplicacion = () => {
    muestra.innerHTML += "*";
};

const fnDivision = () => {
    muestra.innerHTML += "÷";
};

const fnC = () => {
    muestra.innerHTML = "";
};

const fnCe = () => {
    let data = muestra.innerHTML;
    let final = data.substring(0, data.length -1);
    muestra.innerHTML = final;
};

// ----------------------------------- -eventos------------------------------------------
btn1.onclick = function () {
  fn1();
};

btn2.onclick = function () {
  fn2();
};

btn3.onclick = function () {
  fn3();
};

btn4.onclick = function () {
  fn4();
};

btn5.onclick = function () {
  fn5();
};

btn6.onclick = function () {
  fn6();
};

btn7.onclick = function () {
  fn7();
};

btn8.onclick = function () {
  fn8();
};

btn9.onclick = function () {
  fn9();
};

btn0.onclick = function () {
  fn0();
};

btnIgual.onclick = function () {
  fnIgual();
};

btnPunto.onclick = function () {
  fnPunto();
};

btnSuma.onclick = function () {
  fnSuma();
};


btnResta.onclick = function () {
    fnResta();
  };


  btnMultiplicacion.onclick = function () {
    fnMultiplicacion();
  };


  btnDivision.onclick = function () {
    fnDivision();
  };


  btnC.onclick = function () {
    fnC();
  };


  btnCe.onclick = function () {
    fnCe();
  };
      
