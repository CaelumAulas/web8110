'use strict'
; (function () {

    let numeroCartao = 0;

    window.criarCartaoInsereMural = function (objetoCartao) {
        const cartao = document.createElement('article');
        const mural = document.querySelector('.mural');

        cartao.id = "cartao_" + numeroCartao; //concatenacao
        cartao.classList.add('cartao');
        cartao.tabIndex = 0;
        cartao.style.backgroundColor = objetoCartao.cor

        cartao.innerHTML = `
            <div class="opcoesDoCartao">
                <button id="btn${numeroCartao}" class="opcoesDoCartao-remove opcoesDoCartao-opcao" tabindex="0">
                <svg><use xlink:href="#iconeRemover"></use></svg>
                </button>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo" checked>
                <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;" tabindex="0">
                Padrão
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;" tabindex="0">
                Importante
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;" tabindex="0">
                Tarefa
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-radioTipo">
                <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;" tabindex="0">
                Inspiração
                </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${objetoCartao.conteudo}</p>
          `; //fim do innerHTML

        cartao.addEventListener("focusin", function () {
            cartao.classList.add("cartao--focado")
        })

        cartao.addEventListener("focusout", function () {
            cartao.classList.remove("cartao--focado")
        })

        cartao.addEventListener("input", function (evento) {
            if (evento.target.classList.contains("opcoesDoCartao-radioTipo")) {
                cartao.style.backgroundColor = evento.target.value
            }
        })

        cartao.addEventListener("keyup", function deletarViaTeclado(evento) {
            if ((evento.key == "Backspace" || evento.key == "Delete") && event.ctrlKey) {
                if (confirm("Quer remover o cartão?")) {
                    cartao.remove()
                }
            }
        })

        cartao.addEventListener("keyup", function mudaCor(evento) {
            const isBolinhaCor = evento.target.classList.contains("opcoesDoCartao-tipo")
            if (isBolinhaCor && (evento.key == "Enter" || evento.key == " ")) {
                evento.target.click()
            }
        })

        cartao.addEventListener("click", function (evento) {
            if (evento.target.classList.contains("opcoesDoCartao-remove")) {
                cartao.classList.add("cartao--some")
                cartao.addEventListener("transitionend", function () {
                    cartao.remove()
                })
            }
        })

        mural.insertAdjacentElement('afterbegin', cartao);

        numeroCartao++
    }

})()