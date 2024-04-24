document.addEventListener("DOMContentLoaded", function () {
    const buttonTop = document.getElementById('button-top');

    function getWindowHeight() {
        return document.documentElement.scrollHeight - window.innerHeight;
    }

    function buttonTopOpacity() {
        let windowHeight = getWindowHeight();
        let scrollPercentage = window.scrollY / windowHeight;
        buttonTop.style.opacity = Math.min(scrollPercentage, 1);
    }

    window.addEventListener('scroll', buttonTopOpacity);
});
