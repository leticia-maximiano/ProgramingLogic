/**
 * Exemplo de uma função com parâmetro
 * @param {*} texto - Parâmetro que só existe no escopo (dentro da função)
 */
function doSomething(texto) {
  console.log(texto);
}

doSomething("Texto"); // Função sendo executado recebendo um texto como parâmetro

/**
 * Laço de repetição usando while
 * @param {*} lista Array de itens
 */
function trataArray(lista) {
  let i = 0;

  while (i < lista.length) {
    doSomething(lista[i]);

    i++;
  }
}

trataArray([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando for comum
 * @param {*} lista Array de itens
 */
function trataArray2(lista) {
  for (let i = 0; i < lista.length; i++) {
    doSomething(lista[i]);
  }
}

trataArray2([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando for of
 * @param {*} lista Array de itens
 */
function trataArray3(lista) {
  for (let item of lista) {
    doSomething(item);
  }
}

trataArray3([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando for in
 * @param {*} lista Array de itens
 */
function trataArray4(lista) {
  for (let indice in lista) {
    if (lista[indice] == "valor") {
      lista[indice] = "outra coisa";
    }

    doSomething("Chave: " + indice + "; Valor: " + lista[indice]);
  }
}

trataArray4([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando forEach com função anônima
 * @param {Array} lista Array de itens
 */
function trataArray5(lista) {
  lista.forEach(function(item) {
    doSomething(item);
  });
}

trataArray5([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando forEach com passada por referência
 * @param {Array} lista Array de itens
 */
function trataArray6(lista) {
  lista.forEach(doSomething);
}

trataArray6([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando arrayMap - retorna outro array
 * @param {Array} lista Array de itens
 */
function trataArray7(lista) {
  let novaLista = lista.map(function(item) {
    return item + 2;
  });

  doSomething(novaLista);
}

trataArray7([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando arrayMap com lista de objetos - retorna outro array
 * @param {Object[]} lista Array de itens
 */
function trataArray8(lista) {
  let novaLista = lista.map(function(item) {
    return item.name;
  });

  doSomething(novaLista);
}

trataArray8([{name: "pedro"}, {name: "carlos"}]); // Função sendo executada recebendo um array(lista) como parâmetro

/**
 * Laço de repetição usando arrayFilter - retorna outro array filtrado por alguma condição
 * @param {number[]} lista Array de itens
 */
function trataArray9(lista) {
  let novaLista = lista.filter(function(item) {
    if (item < 4) {
      return item;
    }
  });

  doSomething(novaLista);
}

trataArray9([1,2,3,4,5,6]); // Função sendo executada recebendo um array(lista) como parâmetro
//trataArray7([{name: "pedro"}, {name: "carlos"}]);
//trataArray4({chave: "valor", chave2: "valor2"});
