;(function (){

    let instrucoes = [
        {
            cor: 'red',
            conteudo: 'Bem vindo ao CEEP'
        },
       {
           cor: 'green',
           conteudo: 'Escreve uma mensagem no campo de texto para criar cartoes'
       },
       {
           cor: 'blue',
           conteudo: 'Clique nas opcoes de cores para mudar uma cor'
       },
       {
           cor: 'orange',
           conteudo: 'Clique no botao linhas linhas para mudar o layout'
       }   
    ]
    
    const btn = document.querySelector("#btnAjuda")
    
    function guardaCodigo(){

        const conexaoApi = new XMLHttpRequest();

        conexaoApi.open('GET', 'http://ceep.herokuapp.com/cartoes/instrucoes');
        conexaoApi.responseType = 'json';
        conexaoApi.send();
        
        conexaoApi.addEventListener('load', function(){

            console.log(conexaoApi.response);
            
            
            instrucoes = conexaoApi.response.instrucoes
            
            for(let dadosCartao of instrucoes){
                criarCartaoInsereMural(dadosCartao)
            } 
                        
            instrucoes.forEach(function(dadosCartao){
                criarCartaoInsereMural(dadosCartao)
            })
           
            
        })
        










        //for in serve pra percorre o indice de uma lista
        /* for(let indice in instrucoes){
            console.log(indice)
        } */

        /* for(var i = 0; i < instrucoes.length; i++){
            alert(instrucoes[i])
        } */
    }
    
    btn.addEventListener('click', guardaCodigo)
    btn.classList.remove("no-js")

})()