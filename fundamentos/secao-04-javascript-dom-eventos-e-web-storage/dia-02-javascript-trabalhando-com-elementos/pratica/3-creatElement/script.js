//Cria um novo irmão para elementoOndeVoceEsta
const father = document.getElementById("pai");

const newElement = document.createElement("section");
newElement.id = "irmaoElementoOndeVoceEsta";
father.appendChild(newElement);
//Cria novo filho para elementoOndeVoceEsta
const element = document.getElementById('elementoOndeVoceEsta');

const newChild = document.createElement('section');
newChild.id = 'novoFilho';
element.appendChild(newChild);
//Cria um filho para primeiroFilhoDoFilho.
const elementChild = document.getElementById('primeiroFilhoDoFilho');

const NewChildOfChild = document.createElement('section');
NewChildOfChild.id = 'novoFilhoDoFilhoDoFilho';
elementChild.appendChild(NewChildOfChild);
//Acessa terceiroFilho a partir desse filho criado
const access = document.getElementById('novoFilhoDoFilhoDoFilho').parentNode.parentNode.nextSibling.nextSibling;

// const access = document.getElementById('novoFilhoDoFilhoDoFilho').parentElement.parentElement.nextElementSibling;

//parentNode e parentElement: A principal diferença entre eles  é que parentNode retorna o nó pai do elemento, independentemente do tipo de nó (pode ser um nó de elemento, nó de texto, nó de comentário, etc.), enquanto parentElement retorna o nó pai apenas se ele for um elemento.





