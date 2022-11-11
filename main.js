function tocaSom (seletorAudio){

    const elemento = document.querySelector(seletorAudio);

    if (elemento && elemento.localName === 'audio') {
        elemento.play()
    }
    else {
        console.log('Elemento não encontrado ou seletor inválido');
    }

};

const ListaDeTeclas = document.querySelectorAll('.tecla');


for (i = 0; i < ListaDeTeclas.length; i++) {

    const tecla = ListaDeTeclas[i];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    //console.log(idAudio);

    tecla.onclick = function () {

        tocaSom (idAudio);

    };

    tecla.onkeydown = function (evento) {

        if (evento.code == 'Space' || evento.code == 'Enter'){

            tecla.classList.add('ativa');

        };

    };

    tecla.onkeyup = function () {

        tecla.classList.remove('ativa');

    };

};
