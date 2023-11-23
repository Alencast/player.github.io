let music = document.getElementById("music");

function voltar(){ //Função responsável por retroceder o tempo do áudio.

    music.currentTime -= 10;
}

function avancar(){ //Função responsável por avançar o tempo do áudio.
    music.currentTime += 10;

}

function diminuir_vel(){ //Função responsável por diminuir a velocidade do áudio.

    music.playbackRate -= 0.1;

}

function aumentar_vel(){ //Função responsável por aumentar a velocidade do áudio.
    music.playbackRate += 0.1;

}

function play_pause(){ //Função responsável por dar play/pausar o áudio.
    if(music.paused){
        music.play();
    }
    else music.pause();

}

function stop(){ //Função responsável por dar stop no áudio (currentTime retorna à zero).
    music.pause();
    music.currentTime = 0;

}