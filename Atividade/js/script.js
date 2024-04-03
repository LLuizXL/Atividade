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

const exercicio8 = () => {
  let palavra = document.getElementById("palavra").value;
  let error = document.getElementById("erro");
  let result = document.getElementById("resultado");
  error.innerText = "";
  result.innerText = "";

  let inversa = "";

  for (let i = 1; i <= palavra.length; i++) {
    inversa += palavra.charAt(palavra.length - i);
  }

  palavra.toLowerCase() == inversa.toLowerCase()
    ? (result.innerText = "A palavra é um palíndromo!")
    : (error.innerText = "A palavra não é um palíndromo!");
};

const exercicio9 = () => {
  let resp = document.getElementById("resposta");
  let soma = 0;

  for (let i = 0; i <= 100; i++) {
    soma += i;
    resp.innerHTML = `<h3>A soma dos números de 0 a 100 é igual a:</h3>
    <h4> ${soma}</h4>`;
  }
};

const exercicio10 = () => {
  let numero = document.getElementById("num");
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let somador = 0;

  while (numero > somador) {
    somador++;
    if (somador >= numero) {
    }
  }
}; // nao terminei

const exercicio11 = () => {
  let resp = document.getElementById("resposta");
  resp.innerHTML = `<h3>Os múltiplos de 3, de 0 a 100 são:</h3>`;
  for (let i = 0; i <= 100; i += 3) {
    if (i % 3 == 0) {
      resp.innerHTML += `<h4>#${i}</h4>`;
    }
  }
};

const exercicio12 = () => {
  let numero = document.getElementById("num").value;
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let digitos = numero.split("");
  let soma = 0;
  console.log(digitos);

  for (let i = 0; i < digitos.length; i++) {
    soma += digitos[i] * 1;
    resp.innerText = `A soma dos dígitos do número ${numero} é igual a ${soma}.`;
  }
};

const exercicio13 = () => {
  let numero1 = document.getElementById("num1").value;
  let numero2 = document.getElementById("num2").value;
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  erro.innerText = "";
  for (let n = numero1; n < numero2; n++) {
    if (numero1 == 0) {
      console.log(
        (erro.innerText = `Por favor, insira os números em ordem crescente (<-- = Menor | Maior = -->)`)
      );
    }
  }
};

const exercicio14 = () => {
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let result = document.getElementById("resultado");

  result.innerHTML = `<h3> A área do retângulo é igual a:</h3>
<h4>${num1 * num2}</h4>`;
};

const exercicio15 = () => {
  let palavra = document.getElementById("palavra").value;
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let vogais = ["a", "e", "i", "o", "u"];
  let consoante = [
    "b",
    "c",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "m",
    "n",
    "p",
    "q",
    "r",
    "s",
    "t",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  palavra = palavra.toLowerCase();

  for (let i = 0; i <= palavra.length; i++) {
    for (let v = 0; v <= vogais.length; v++) {
      if (palavra.charAt(i) == vogais[v]) {
        resp.innerHTML += `<h4>Vogal presente na palavra: ${palavra.charAt(
          i
        )}</h4>`;
      }
    }
    for (let c = 0; c < consoante.length; c++) {
      if (palavra.charAt(i) == consoante[c]) {
        resp.innerHTML += `<h4>Consoante presente na palavra: ${palavra.charAt(
          i
        )}</h4>`;
      }
    }
  }
};

const exercicio16 = () => {
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let pi = 3.14;

  resp.innerText = `A área do circulo com ${num1} de RAIO é igual a:
  ${(num1 ^ 2) * pi}`;
};

const exercicio17 = () => {
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  if (num1 == "" || num2 == 0) {
    erro.innerText = `Insira um número.`;
  }
  resp.innerText = `A área do Triângulo é igual a = ${(num1 * num2) / 2}`;
};

const exercicio18 = () => {
  let resp = document.getElementById("resultado");
  let erro = document.getElementById("erro");
  let num1 = document.getElementById("num1").value;
  let num2 = document.getElementById("num2").value;
  let num3 = document.getElementById("num3").value;

  resp.innerText = `A área do Trapézio é iguial a: ${
    (num1 + num2) * num3 / 2
  }`;
};
