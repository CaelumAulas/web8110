// Expressão de Função Imediatamente Invocada
// Immediatelly Invoked Function Expression
// IIFE

;(function (){
 
    const btn = document.querySelector("#btnMudaLayout")
    
    function mudaTexto(){
        if(btn.textContent.trim() == "Linhas"){
            btn.textContent = "Blocos"
        } else {
            btn.textContent = "Linhas"
        }
    }
    
    const mural = document.querySelector(".mural")
    
    function mudaLayout(){
        mural.classList.toggle("mural--linha")
    }
    
    btn.addEventListener("click", mudaLayout)
    btn.addEventListener("click", mudaTexto)
    
    btn.classList.remove("no-js")

})()
