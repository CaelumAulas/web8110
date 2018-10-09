const cartoes = document.querySelectorAll(".cartao")

cartoes.forEach(function rodaRoda(cartao){
    
    cartao.addEventListener("focusin", function(){
        cartao.classList.add("cartao--focado")
    })
    
    cartao.addEventListener("focusout", function(){
        cartao.classList.remove("cartao--focado")
    })
    
    // Event Delegation
    // Delegate
    // Bubbling
    cartao.addEventListener("input",  function(evento){ 
        if(evento.target.classList.contains("opcoesDoCartao-radioTipo")){
            cartao.style.backgroundColor = evento.target.value
        }
    })

    cartao.addEventListener("keyup", function deletarViaTeclado(evento){
        if((evento.key == "Backspace" || evento.key == "Delete") && event.ctrlKey){
            if(confirm("Quer remover o cartão?")){
                cartao.remove()
            }
        }
    })

    cartao.addEventListener("keyup", function mudaCor(evento){        
        const isBolinhaCor = evento.target.classList.contains("opcoesDoCartao-tipo")
        if(isBolinhaCor && (evento.key == "Enter" || evento.key == " ")){
            evento.target.click()
        }
    })

    cartao.addEventListener("click", function(evento){
        if(evento.target.classList.contains("opcoesDoCartao-remove")){
            cartao.classList.add("cartao--some")
            cartao.addEventListener("transitionend", function (){
                cartao.remove()
            })
        }
    })

})


// Por debaixo dos panos do forEach
// for(let i = 0; i < cartoes.length; i++){
//    rodaRoda(cartoes[i]) 
// }