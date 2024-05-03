
function escolhaDoPC(){

    const jokenpo = ['Pedra', 'Papel', 'Tesoura']
    var numeroAleatorio = Math.floor(Math.random() * 3)
    return jokenpo[numeroAleatorio]
}

function jogar(escolhaDoJogador){
    var escolhaPC = escolhaDoPC()
    var resultado = ""

    if(escolhaPC === escolhaDoJogador){
        resultado = "Deu empate"
    }
    else if(escolhaPC === 'Tesoura' && escolhaDoJogador === 'Papel'){
        resultado = "O PC venceu!"
    }
    else if(escolhaPC === 'Papel' && escolhaDoJogador === 'Pedra'){
        resultado = "O PC venceu!"
    }
    else if(escolhaPC === 'Pedra' && escolhaDoJogador === 'Tesoura'){
        resultado = "O PC venceu!"
    }
    else{
        resultado = "Você venceu!"
    }
    console.log(escolhaPC)
    document.getElementById('resultado').innerText = resultado
}