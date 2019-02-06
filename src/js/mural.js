;(function(){

    $.ajax({
        url: 'https://ceep.herokuapp.com/cartoes/carregar',
        method: 'GET',
        data: {usuario: 'vanessa'},
        dataType: 'jsonp',
        success: function(resposta){

            console.log(resposta.cartoes);

            for(let cartao of resposta.cartoes){
                criarCartaoInsereMural(cartao)
            }
            
        }

    })



    /* 
    const conexaoApi = new XMLHttpRequest()
    conexaoApi.open('GET', 'https://ceep.herokuapp.com/cartoes/carregar')
    conexaoApi.send(JSON.stringify({usuario: 'vanessa'}))

    conexaoApi.addEventListener('load', function(){
        console.log(conexaoApi.response);
        
    }) 
    */


})()