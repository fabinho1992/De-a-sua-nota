const container = document.querySelector('.container__principal');
const containerThankYou = document.querySelector('.container__thank-you');
const btn = document.querySelector(".btn__principal");
const numeros = document.querySelectorAll('.number');
const nota = document.querySelector('.nota');
const btnVoltar = document.querySelector('#btn-voltar');


numeros.forEach(numero => {
    numero.addEventListener('click', function () {
        // remover classe active
        numeros.forEach(numero => {
            numero.classList.remove('active');
        });

        // adicionar classe active
        numero.classList.add('active');

        // atualizar o valor
        numeroSelecionado = numero.innerHTML;
        console.log(numeroSelecionado);

    });
});

btn.addEventListener('click', () => {

    containerThankYou.classList.toggle('hide');
    container.classList.toggle('hide');

    nota.innerHTML = numeroSelecionado;

    //window.location.href = 'thank-you.html'; UMA DAS MANEIRAS DE SE FAZER
})

    btnVoltar.addEventListener('click', () => {

        containerThankYou.classList.toggle('hide');
        container.classList.toggle('hide');
        numeros.forEach(numero => {
            numero.classList.remove('active');
        })
    })




