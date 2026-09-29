```javascript
// ==========================================
// MANIPULAÇÃO DO DOM
// ==========================================


// 1. getElementById
// Procura um elemento pelo seu ID.

const cabecalho = document.getElementById("cabecalho");

console.log("getElementById:", cabecalho);


// 2. getElementsByClassName
// Procura elementos que possuem determinada classe.

const caixas = document.getElementsByClassName("caixa");

console.log("getElementsByClassName:", caixas);


// 3. getElementsByTagName
// Procura elementos pelo nome da tag.

const paragrafos = document.getElementsByTagName("p");

console.log("getElementsByTagName:", paragrafos);


// 4. querySelector
// Procura o primeiro elemento que corresponde ao seletor.

const destaque = document.querySelector(".destaque");

console.log("querySelector:", destaque);


// 5. querySelectorAll
// Procura todos os elementos que correspondem ao seletor.

const botoes = document.querySelectorAll(".botao");

console.log("querySelectorAll:", botoes);


// 6. innerHTML
// Permite alterar o conteúdo HTML de um elemento.

const paragrafo = document.getElementById("paragrafo");

paragrafo.innerHTML = "Este parágrafo foi alterado utilizando <strong>innerHTML</strong>.";

console.log("innerHTML:", paragrafo.innerHTML);


// 7. addEventListener
// Adiciona uma ação para um evento.

document.addEventListener("click", function(evento) {

    // Verifica se o clique aconteceu diretamente no fundo
    if (evento.target === document.body) {

        // 8. classList.toggle("vermelho")
        // Adiciona ou remove a classe "vermelho".

        document.body.classList.toggle("vermelho");
    }

});


// Evento no botão principal

const botaoPrincipal = document.getElementById("botaoPrincipal");

botaoPrincipal.addEventListener("click", function(evento) {

    evento.stopPropagation();

    alert("Você clicou no botão principal!");

});


// Evento do formulário

const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(evento) {

    evento.preventDefault();

    alert("Formulário enviado!");

});


// 9. createElement
// Cria um novo elemento HTML.

const novaCaixa = document.createElement("div");

novaCaixa.classList.add("caixa");

novaCaixa.innerHTML = `
    <h3>Caixa criada pelo JavaScript</h3>
    <p>Esta caixa foi criada usando createElement.</p>
`;


// 10. appendChild
// Adiciona o elemento criado dentro de outro elemento.

const areaCaixas = document.querySelector(".caixas");

areaCaixas.appendChild(novaCaixa);


// Mensagem no console

console.log("Todos os métodos do DOM foram demonstrados!");
```
