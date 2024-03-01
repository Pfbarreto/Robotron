const Operadores = document.querySelectorAll('[data-controle]')
const estatistica = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "bracos": {
        "forca": 29,
        "poder": 35,
        "energia": -21,
        "velocidade": -5
    },

    "blindagem": {
        "forca": 41,
        "poder": 20,
        "energia": 0,
        "velocidade": -20
    },
    "nucleos":{
        "forca": 0,
        "poder": 7,
        "energia": 48,
        "velocidade": -24
    },
    "pernas":{
        "forca": 27,
        "poder": 21,
        "energia": -32,
        "velocidade": 42
    },
    "foguetes":{
        "forca": 0,
        "poder": 28,
        "energia": 0,
        "velocidade": -2
    }
}


Operadores.forEach((elemento)=>{
    elemento.addEventListener('click', (evento)=>{
        ManipularDados(evento.target.dataset.controle, evento.target.parentNode, evento.target.dataset.peca)
    })
})

function ManipularDados (operador, controle, ParteDoRobo){
    const pecaRb = controle.querySelector('[data-contador]')
    if (operador ==='-' && pecaRb.value>0){
        pecaRb.value = parseInt(pecaRb.value) - 1
        estatistica.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) - pecas[ParteDoRobo][elemento.dataset.estatistica]
        })

    }
    if(operador==='+'){
        pecaRb.value = parseInt(pecaRb.value) + 1
        estatistica.forEach((elemento)=>{
            elemento.textContent = parseInt(elemento.textContent) + pecas[ParteDoRobo][elemento.dataset.estatistica]
        }) 
    }


}
