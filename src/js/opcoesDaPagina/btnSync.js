;(function(){

    const btn = document.querySelector('#btnSync')

    btn.classList.remove('no-js')

    btn.addEventListener('click', function(){
        
        const infosCartoes = [],
            listaCartoes = document.querySelectorAll('.cartao'),
            conexaoSync = new XMLHttpRequest();

        conexaoSync.open('POST', 'https://ceep.herokuapp.com/cartoes/salvar')
        conexaoSync.setRequestHeader('Content-Type','application/json')

        for(let cartao of listaCartoes){
            
            let cor = cartao.style.backgroundColor,
                conteudo = cartao.querySelector('.cartao-conteudo').textContent

            infosCartoes.push({cor, conteudo})
        }

        //transform o objeto em texto
        let infosApi = JSON.stringify({
            usuario: 'vanessa',
            cartoes: infosCartoes
        })

        conexaoSync.send(infosApi)

        conexaoSync.addEventListener('load', function(){
            console.log(conexaoSync.response);
        })
    })

})()