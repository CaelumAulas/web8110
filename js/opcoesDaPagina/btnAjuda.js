;(function (){

    const instrucoes = [
        'Bem vindo ao CEEP'
        ,'Aperte o botão "linhas" para mudaro estilo do mural'
        ,'Instrução 3'
    ]
    
    const btn = document.querySelector("#btnAjuda")
    
    function guardaCodigo(){
        for(var i = 0; i < instrucoes.length; i++){
            alert(instrucoes[i])
        }
    }
    
    btn.onclick = guardaCodigo
    
    btn.classList.remove("no-js")

})()