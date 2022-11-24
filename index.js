let submit = document.getElementById('ipnS')
submit.addEventListener('click', () => {
    let input = document.querySelector('#ipn')
    let transfInput = Number(input.value)
    let resposta = document.querySelector('#res')


    if (input.value == ''){
       alert('Coloque alguma idade!')

    } 

    if(transfInput > 0 && transfInput <= 15){
        resposta.innerHTML = 'Não vota!'
    } else if (transfInput > 15 && transfInput < 18){
        resposta.innerHTML = 'Voto opcional'
    } else if (transfInput > 17 && transfInput <= 69){
        resposta.innerHTML = 'Voto obrigatorio'
    } else if (transfInput >= 70 && transfInput <= 110){
        resposta.innerHTML = 'Voto opcional'
    }
})


