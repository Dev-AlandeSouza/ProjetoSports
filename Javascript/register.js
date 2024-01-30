$(document).ready(function () {
    function createLetterSpans() {
        var text = $("#animatedTitle").text();
        var newText = "";

        for (var i = 0; i < text.length; i++) {
            newText += `<span class="letter-${i}">${text[i]}</span>`;
        }

        $("#animatedTitle").html(newText);
    }

    function animateLetters() {
        var textLength = $("#animatedTitle span").length;

        for (var i = 0; i < textLength; i++) {
            setTimeout(function (index) {
                animateLetter(index);
            }, i * 120, i);
        }
    }

    function animateLetter(index) {
        $(".letter-" + index).addClass("animate__animated animate__zoomIn").css("color", getRandomColor());
    }

    function getRandomColor() {
        return "#0099ff";
    }

    function restartAnimation() {
        $("#animatedTitle span").removeClass("animate__animated animate__zoomIn").css("color", "");
        createLetterSpans();
        animateLetters();
    }

    createLetterSpans();
    animateLetters();

    setInterval(restartAnimation, 2200);
});
