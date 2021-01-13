/*
Para ajudar a calcular as notas referentes às duas avaliações dos alunos, uma professora pediu para que você desenvolva um programa que calcule e imprima a média semestral. Faça com que o algoritmo só aceite notas válidas (uma nota válida deve pertencer ao intervalo [0,10]). Cada nota deve ser validada separadamente.

Entrada
A entrada contém vários valores reais, positivos ou negativos. O programa deve ser encerrado quando forem lidas duas notas válidas.

Saída
Se uma nota inválida  for lida, deve ser impressa a mensagem "nota invalida".
Quando duas notas válidas forem lidas, deve ser impressa a mensagem "media = " seguido do valor do cálculo. O valor deve ser apresentado com duas casas após o ponto decimal.

 
Exemplo de Entrada	Exemplo de Saída
-3.5
3.5
11.0
10.0

nota invalida
nota invalida
media = 6.75    
*/
let valid = 0;
var notas = [];
while(valid<2){
  let n1 = gets();
  if(n1>=0 && n1<=10){
    valid++;
    notas.push(n1);
  }else{
    console.log("nota invalida")
  }
  let n2 = gets();
  if(n2>=0 && n2<=10){
    valid++;
    notas.push(n2);
  }else{
    console.log("nota invalida")
  }
}
let media = ((parseFloat(notas[0])+parseFloat(notas[1]))/2).toFixed(2);
console.log("media = "+media)
