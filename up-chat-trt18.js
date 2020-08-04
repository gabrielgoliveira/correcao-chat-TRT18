// ==UserScript==
// @name         TRT18 Chat
// @namespace    https://github.com/gabrielgoliveira/correcao-chat-TRT18
// @version      0.1
// @description  Resolvendo problema do Chat
// @author       Gabriel Oliveira
// @match        https://chat.trt18.jus.br/channel/publico
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    //criando tag source
    const source = document.createElement('source');
    source.setAttribute('src', 'http://soundbible.com/grab.php?id=2154&type=mp3');
    source.setAttribute('type', 'audio/mpeg');

    console.log('-------------- Script Rodando ---------------------');

//definição das funções

    function check_changes(){

        //criando tag audio
        const audio = document.createElement('audio');
        audio.setAttribute('id', 'notificacao');
        audio.setAttribute('preload', 'auto');

        //adc source ao audio
        audio.appendChild(source);

        //executando o audio se entrar algum chat
        const list_chats = document.querySelector('div.livechat-section > ul');
        const list_chats_elements = list_chats.children;
        //verificando chamados entrantes
        if(list_chats_elements.length){
            audio.play()
        }

    }

    function refresh(){
        window.location.reload(1);
        setTimeout(check_changes, 3000);
    }

    
    function interface_check_changes(time){
        //entre com o tempo em segundos para definir o intervalo de checagem para chats entrantes
        setInterval(check_changes, time*1000)
    }

    
    function interface_refresh(time){
        //entre com o tempo em segundos para definir o intervalo de atualização da pagina
        setTimeout(refresh, time*1000);
    }

/*
    Execução do Codigo

    OBS : Caso queira alterar entre com o tempo em segundos
*/
    interface_refresh(60)
    interface_check_changes(1);
})();
