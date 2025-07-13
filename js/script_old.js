window.addEventListener('DOMContentLoaded', function () {
    let cardArray = document.getElementsByClassName("grid-item-card");
    // Formerly hid and revealed "project cards" on mobile while scrolling
    function mobileScrollRevealer()
    {
        let viewportHeight = this.innerHeight;
        for (var i = 0; i < cardArray.length; i++)
        {
            let yCard = Math.round(cardArray[i].getBoundingClientRect().top);
            let cardHeight = Math.round(cardArray[i].getBoundingClientRect().height);
            let revealCardAreaTop = Math.round(viewportHeight / 4);
            let revealCardAreaBottom = viewportHeight - Math.round(viewportHeight / 4) - (cardHeight * 1.25);
            let cardFadeOpacity = 0;
            if (yCard < revealCardAreaBottom)
            {
                cardFadeOpacity = 1 - (yCard / revealCardAreaTop);
            }
            else if (yCard >= revealCardAreaBottom)
            {
                cardFadeOpacity = (yCard / revealCardAreaBottom) - 1;
            }
            cardArray[i].firstElementChild.style.opacity = cardFadeOpacity;
        };
    }
    // Ran mobileScrollRevealer() when the width of the window was suitable to be used for mobile
    if (window.innerWidth <= 1000)
    {
        this.addEventListener("scroll", function()
        {
            mobileScrollRevealer();
        });
    }
});
