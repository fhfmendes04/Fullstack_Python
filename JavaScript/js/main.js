
/*
var nome = "Fabio";
var idade = 46
var idade2 = 10
var frase = "tudo vale a pena.";

//alert("Bem vindo " + nome + idade + "anos");
//alert(idade + idade2)

console.log(nome);
console.log(idade);
console.log(frase);

//console.log(frase.replace("tudo", "Verdade"));

*/

/*
var lista = ["maçã", "pera", "laranja"];
lista.push("uva");
console.log(lista);
console.log(lista[1]);

lista.pop();
console.log(lista);

console.log(lista.length)
console.log(lista.toString());
console.log(lista.join(" - "))
*/

/*
//var fruta = {nome: "maçã", cor:"vermelha"};
//console.log(fruta);
//console.log(fruta.nome)

var frutas = [{nome: "maçã", cor:"vermelha"}, {nome:"uva", cor: "roxa"}];
console.log(frutas);
console.log(frutas[1].cor)

*/

/*
var idade = prompt("Qual sua idade:");

if (idade >= 18) {
	alert("maior de idade")
} else {
	alert("menor de idade")
}

*/

/*

var count = 0;
while (count<5){
	console.log(count)
	count++
}
*/

/*
var count;
for(count=0; count <=5; count++){
	console.log(count);
}
*/

/*
var d= new Date()

console.log(d.getMonth());
console.log(d);
console.log(d.getMinutes());
*/

/*
function soma(n1, n2){
	return n1 + n2;
}

var validar;

function validaIdade(idade){
	var validar;
	if (idade>18){
		validar = true
	}else{
		validar = false
	}

	return validar;
}

var idade = prompt("Qual sua idade: ")
console.log(validarIdade(idade))

alert(soma(5,10))

*/

function clicou(){
	document.getElementById("agradecimento").innerHTML = "Botão clicado...";
	//alert("botão clicado")

}

function redirecionar(){
	window.open("https://g1.globo.com/");
	//windows.location.href = "https://g1.globo.com/" MESMA JANELA;
}

/*function trocar(){
	document.getElementById("mousemove").innerHTML = "Passou o mouse.";
}

function voltar(){
	document.getElementById("mousemove").innerHTML = "Passe o mouse aqui.";
}*/

function trocar(elemento){
	elemento.innerHTML = "Passou o mouse.";
}

function voltar(elemento){
	elemento.innerHTML = "Passe o mouse aqui.";

}
function carregar(){
	alert("Página carregada.")
}

function selecionar(elemento){
	alert(elemento.value);
}





