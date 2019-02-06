;(function () {

    const form = document.querySelector('.formNovoCartao');

    form.addEventListener('submit', function (evento) {

        evento.preventDefault();

        const textarea = this.querySelector('.formNovoCartao-conteudo');
        textarea.value = textarea.value.trim()

        if (textarea.value) {

            const objetoCartao = {
                conteudo: textarea.value
            }
            
            criarCartaoInsereMural(objetoCartao);
            this.reset();

        }
        else {

            const msgErro = document.createElement('p');

            msgErro.textContent = 'OOoo preencha um texto ai';

            msgErro.classList.add('formNovoCartao-msg');

            textarea.insertAdjacentElement('afterend', msgErro);

            msgErro.addEventListener('animationend', function () {
                msgErro.remove()
            })

        }

    })

    form.classList.remove('no-js');

})()
