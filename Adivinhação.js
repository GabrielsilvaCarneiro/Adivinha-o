const numeroAleatorio = Math.floor(Math.random() * 100) + 1;


const campoPalpite = document.getElementById("guessField");
const enviarPalpite = document.getElementById("guessSubmit");
const mensagemContainer = document.querySelector(".message");
const restartButton = document.getElementById("restartButton");


let tentativas = 0;
let maxTentativas = 5;
let venceu = false;


function verificarPalpite() {
    const palpiteUsuario = parseInt(campoPalpite.value);
    tentativas++;

    if (palpiteUsuario === numeroAleatorio) {
        venceu = true;
        exibirMensagem(`Parabéns! Você acertou o número ${numeroAleatorio} em ${tentativas} tentativas.`);
        encerrarJogo();
    } else if (tentativas === maxTentativas) {
        exibirMensagem(`Fim de jogo! O número correto era ${numeroAleatorio}.`);
        encerrarJogo();
    } else {
        const dica = palpiteUsuario < numeroAleatorio ? "maior" : "menor";
        exibirMensagem(`Tente novamente. Dica: O número é ${dica} que ${palpiteUsuario}.`);
    }
    
    campoPalpite.value = '';
    campoPalpite.focus();
}


function exibirMensagem(msg) {
    const mensagemElement = document.createElement('p'); 
    mensagemElement.textContent = msg;
    mensagemContainer.appendChild(mensagemElement); 
}

function encerrarJogo() {
    campoPalpite.disabled = true;
    enviarPalpite.disabled = true;
}

function reiniciarJogo() {
   
    mensagemContainer.innerHTML = '';

    campoPalpite.disabled = false;
    enviarPalpite.disabled = false;

    numeroAleatorio = Math.floor(Math.random() * 100) + 1;

    
    tentativas = 0;
    venceu = false;

    
    campoPalpite.value = '';
    campoPalpite.focus();
}


enviarPalpite.addEventListener("click", verificarPalpite);

restartButton.addEventListener("click", reiniciarJogo);


campoPalpite.focus();