window.addEventListener('DOMContentLoaded', function () {
    // Adds 100ms delay to allow click transition to play on mobile devices
    function delayLink() {
        var links = document.querySelectorAll('.delayed-link');

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();

                var href = link.href;

                setTimeout(function () {
                    window.location.href = href;
                }, 200);
            });
        });
    }
    // Runs delayLink() if mobile
    if (window.innerWidth <= 1000)
    {
        delayLink();
    }
});
