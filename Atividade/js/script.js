const exercicio1 = () => {
  document.getElementById("resposta").innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    document.getElementById("resposta").innerHTML += `<h3> #${i}; </h3>`;
  }
};

const exercicio2 = () => {
  for (let n = 0; n <= document.getElementById("num").value; n += 2) {
    document.getElementById("resultado").innerHTML += `<h2>#${n},</h2> `;
  }
};
const exercicio3 = () => {
  let numero = document.getElementById("num").value;
  let resp = document.getElementById("resultado");
  let errou = document.getElementById("erro");
  let primo = true;
  errou.innerText = " ";
  resp.innerText = " ";
  if (numero <= 0) {
    errou.innerText = `Insira apenas números positivos ou diferentes de 0.`;
  } else {
    errou.innerText = " ";
    for (let i = 2; i < numero; i++) {
      if (numero % i == 0) primo = false;
    }
    if (primo) {
      resp.innerText = `O número ${numero} é primo.`;
    } else {
      errou.innerText = `O número ${numero} não é primo.`;
    }
  }
};

const exercicio4 = () => {
  let numero = document.getElementById("num").value;
  let resp = document.getElementById("resultado");
  let errokkj = document.getElementById("erro");
  resp.innerText = `Tabuada do número ${numero}:`;
  errokkj.innerHTML = " ";

  for (let i = 0; i <= 10; i++) {
    resp.innerHTML += `<h2>${numero} x ${i} = ${numero * i} </h2>`;

    if (numero < 0) {
      resp.innerText = "";
      errokkj.innerText = `Numero negativo detectado. Caso não seja retirado, haverá sérias consequências.`;
    }
  }
};

const exercicio5 = () => {
  let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resp = document.getElementById("resultado");
  let impar = 0;
  resp.innerText = " ";
  resp.innerText = `Os números ímpares de 0 até ${numero} são:`;
  while (numero > impar) {
    impar++;
    if (impar % 2 >= 1) {
      resp.innerHTML += `<h3> ${impar} </h3>`;
    }
  }
};

const exercicio6 = () => {
  let numero = document.getElementById("num").value;
  let erro = document.getElementById("erro");
  let resp = document.getElementById("resultado");
  let par = 0;
  let soma = 0;

  resp.innerText = " ";

  while (numero > par) {
    par++;
    if (par % 2 == 0) {
      soma += par;
    }
    resp.innerHTML = `<h3>A soma dos números pares de 0 até ${numero} são:</h3>  <h4>${soma}</h4>`;
  }
};
const exercicio7 = () => {
  let resposta = document.getElementById("resposta");
  let contador = 10;
  let n = 0;
  resposta.innerHTML += `<h3>Contador de 10 a 0: </h3>`;
  while (contador > n) {
    if (contador != 0) {
      contador--;
      resposta.innerHTML += `
      <h4>${contador}</h4>`;
    }
  }
};

const exercicio8 = () => {};

const exercicio9 = () => {
  let resp = document.getElementById("resposta");
  let soma = 0;
  
  for (let i = 0; i <= 100; i++) {
    soma += i;
    resp.innerHTML = `<h3>A soma dos números de 0 a 100 é igual a:</h3>
    <h4> ${soma}</h4>`
  }
};

const exercicio10 = () =>{

}

const exercicio11 = () => {
  
}