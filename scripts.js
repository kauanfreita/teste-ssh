const botao1 = document.querySelector('.botao');
const input = document.querySelector('.adicionar');

let minhalista = []

function adicionarvalor (){
    minhalista.push(input.value);
    console.log(minhalista)
}
function mostrartarefas (){
    
}

botao1.addEventListener('click', adicionarvalor);