//vetores.

const listaDeNomes = ["Marta" , "José", "Maria"] 

console.log(" Exibindo todos os elementos:")
console.log (listaDeNomes)

console.log("\nExibindo apenas o primeiro elemento: ")
console.log (listaDeNomes [0])

console.log ("\nAdicionado um elemento: ")
listaDeNomes.push ("Marília")
console.log(listaDeNomes)

// Sua vez, adicione mais um na lista.

console.log("\nRemovendo um elemento: ")
listaDeNomes.splice(2,1)
console.log(listaDeNomes)

// Sua vez , remova apenas o segundo elemento 
listaDeNomes.splice(1, 1);
console.log(listaDeNomes);
