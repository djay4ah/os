function closerror() {
    document.getElementsByClassName("error_container")[0].style.display = "none"
}


function openrror() {
    document.getElementsByClassName("error_container")[0].style.display = "block"
    let audio = new Audio(); // Создаём новый элемент Audio
    audio.src = 'error.mp3'; // Указываем путь к звуку "клика"
    audio.autoplay = true; // Автоматически запускаем
}

function closettings() {
    document.getElementsByClassName("settings_container")[0].style.display = "none"
    document.getElementsByClassName("st")[0].style.display = "none"
    erroropened = false;
}

function openettings() {
    document.getElementsByClassName("settings_container")[0].style.display = "block"
    document.getElementsByClassName("st")[0].style.display = "block"
}

function bg1() {
    document.getElementsByClassName("bg1")[0].style.display = "block"
    document.getElementsByClassName("bg2")[0].style.display = "none"
}

function bg2() {
    document.getElementsByClassName("bg2")[0].style.display = "block"
    document.getElementsByClassName("bg1")[0].style.display = "none"
}

function collapsesettings() {
    document.getElementsByClassName("settings_container")[0].style.display = "none"
}

function closemedia() {
    document.getElementsByClassName("music_container")[0].style.display = "none"
    document.getElementsByClassName("mt")[0].style.display = "none"
    audio2.pause();
}

function openmedia() {
    document.getElementsByClassName("music_container")[0].style.display = "block"
    document.getElementsByClassName("mt")[0].style.display = "block"
}

function collapsemedia() {
    document.getElementsByClassName("music_container")[0].style.display = "none"
}

let bkplaying = 0
let audio2 = new Audio(); 

function playbk() {

audio2.src = 'bk.mp3'; 
audio2.autoplay = false;
audio2.volume = 0.2
audio2.autoplay = true
}

function stopbk() {
    audio2.pause();
}

