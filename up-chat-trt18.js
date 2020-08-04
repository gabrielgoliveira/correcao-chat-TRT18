// ==UserScript==
// @name         TRT18 Chat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
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

    setTimeout(refresh, 60000);
    setInterval(check_changes, 5000)
})();
