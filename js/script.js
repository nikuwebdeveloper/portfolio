document.addEventListener("DOMContentLoaded", function () {
    const buttonTop = document.getElementById('button-top');
    const moptecAnchor = document.getElementById('moptec');
    const moptecHeading2 = document.getElementById('moptec-under-construction');


    function getWindowHeight() {
        return document.documentElement.scrollHeight - window.innerHeight;
    }

    function buttonTopOpacity() {
        let windowHeight = getWindowHeight();
        let scrollPercentage = window.scrollY / windowHeight;
        buttonTop.style.opacity = Math.min(scrollPercentage, 1);
    }

    function displayUnderConstruction() {
        moptecHeading2.innerHTML = "COMING SOON";

    }
    function resetText() {
        moptecHeading2.innerHTML = "MOPTEC";
    }

    moptecAnchor.addEventListener('mouseover', displayUnderConstruction);
    moptecAnchor.addEventListener('mouseout', resetText);
    window.addEventListener('scroll', buttonTopOpacity);

});
