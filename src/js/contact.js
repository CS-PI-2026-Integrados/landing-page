const name_textarea = document.getElementById("name");
const button = document.getElementById("fbutton");
const span_nome = document.getElementById("span-nome");

button.onclick = () => enviar();

function enviar(){
    if(name_textarea.value!="teste"){
        span_nome.textContent ="Digite o seu nome, por gentileza."
    }
}
