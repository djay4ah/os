function start() {
    document.getElementsByClassName("console_log1")[0].style.display = "flex"
        document.getElementsByClassName("start-btn")[0].style.display = "none"
        setTimeout(csl2, 2000);
        setTimeout(csl3, 3000);
        setTimeout(start1, 5000);
        setTimeout(playsound, 10000)
    function csl2() {
        document.getElementsByClassName("console_log2")[0].style.display = "flex"
    }
    function csl3() {
        document.getElementsByClassName("console_log3")[0].style.display = "flex"
    }
    function start1() {
    document.getElementsByClassName("load")[0].style.display = "flex"
    document.getElementsByClassName("console_log1")[0].style.display = "none"
    document.getElementsByClassName("console_log2")[0].style.display = "none"
    document.getElementsByClassName("console_log3")[0].style.display = "none"
    }
    function playsound() {
        var audio = new Audio(); // Создаём новый элемент Audio
        audio.src = 'start-sound.mp3'; // Указываем путь к звуку "клика"
        audio.autoplay = true; // Автоматически запускаем
        setTimeout(() => {
            window.location.href = '../os/os.html';
        }, 1000);
      }
}