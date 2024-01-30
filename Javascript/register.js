$(document).ready(function () {
    function startAnimation() {
        var text = $("#animatedTitle").text();
        var newText = "";

        for (var i = 0; i < text.length; i++) {
            newText += "<span class='letter-" + i + "'>" + text[i] + "</span>";
        }

        $("#animatedTitle").html(newText);

        for (var i = 0; i < text.length; i++) {
            animateLetter(i);
        }
    }

    function animateLetter(index) {
        var delay = index * 100;

        setTimeout(function () {
            $(".letter-" + index).addClass("animate__animated animate__zoomIn").css("color", getRandomColor());
        }, delay);
    }

    function getRandomColor() {
        var blueComponent = Math.floor(Math.random() * 256);
        var color = "rgb(0, 0, " + blueComponent + ")";
        return "#0099ff";
    }

    startAnimation();

    setInterval(function () {
        $("#animatedTitle").find("span").removeClass("animate__animated animate__zoomIn").css("color", "");
        startAnimation();
    }, 3000);
});