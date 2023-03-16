let clientesTrybeBank = ['Ada', 'John', 'Gus'];

function removeName(names) {
  if (typeof names === 'string') {
    let clienteEncontrado = false;
    for (let index = 0; index < clientesTrybeBank.length; index += 1)
      if (names === clientesTrybeBank[index]) {
        clientesTrybeBank.splice(index, 1);
        clienteEncontrado = true;
        return 'Cliente excluída(o) com sucesso.';
      }

    if (clienteEncontrado === false) {
      return 'Cliente não encontrada(o)';
    }
  } else {
    return 'O parametro deve ser do tipo "string"!';
  }
}

console.log(removeName(false));
console.log(removeName('Barney'));
console.log(removeName('John'));
console.log(clientesTrybeBank);
