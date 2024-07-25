let contador = 0;

let input = document.getElementById('addtarefa');
let btnadd = document.getElementById('buttonadicionar');
let main = document.getElementById('main');
let checado = "check_circle";
let nchecado = "radio_button_unchecked";  

function addtarefa(){
    let valorinput = input.value;

    if((valorinput !== "") && (valorinput !== null) && (valorinput !== undefined)){
       ++contador;
       
        let novoitem = `
        <div id="${contador}" class="item">

    <div onclick="marcartarefa(${contador})" class="item-icone">
        <i id="icone_${contador}" class="material-symbols-outlined">${checado}</i>
    </div>
  

    <div onclick="marcartarefa(${contador})" class="item-nome">${valorinput}</div>

    <div class="item-botao">
        <button onclick="deletar(${contador})" class="delete">deletar</button>
    </div>`;

    main.innerHTML += novoitem;
    // adiciona no main no html


    // zera o campinho do input
    input.value  = "";  
    input.focus();


    }
}
//fica olhando os eventos que acontecem no input keyup é quando alguma tecla é clicada e pega o evento que aconteceu

input.addEventListener("keyup", function(event){
// verifica se foi clicada a tecla 13 que e a tecla enter
    if(event.keyCode === 13){
        // primeira linha ignora qualquer coisa que impeca qeu quando a tecla enter seja clicada adicionar o item
        event.preventDefault();
        btnadd.click();
    }
})
// pega o id do contador e apaga 
function deletar(id){
var tarefa = document.getElementById(id);
tarefa.remove();
}
function marcartarefa(id){
    var item = document.getElementById(id);
    var classe = item.getAttribute('class');
    if ( classe == "item"){
        item.classList.add('clicado');
        var icone = document.getElementById('icone_'+id).innerHTML=nchecado;
        icone.classList.remove.innerHTML = checado;
        

        item.Node.appendChild(item);

    }else{
        item.classList.remove('clicado');
        var icone = document.getElementById('icone_'+id).innerHTML = checado;
        icone.classList.remove.innerHTML = nchecado;
        
    }
}