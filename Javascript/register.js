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
            }, i * 100, i);
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

function toggleRegistration() {
    const loginCard = document.querySelector('.login');
    const registerCard = document.querySelector('.register');
    const reverseButton = document.getElementById('button-reverse');

    loginCard.classList.add('flip-vertical-right');

    setTimeout(() => {
      loginCard.style.display = 'none';
      registerCard.style.display = 'block';
      registerCard.classList.toggle('flip-vertical-right');
      reverseButton.style.display = 'block';
    }, 650); 
  }

  function reverseCard() {
    const loginCard = document.querySelector('.login');
    const registerCard = document.querySelector('.register');
    const reverseButton = document.getElementById('button-reverse');

    registerCard.classList.toggle('flip-vertical-right');

    setTimeout(() => {
      registerCard.style.display = 'none';
      loginCard.style.display = 'flex';
      loginCard.classList.remove('flip-vertical-right');
      reverseButton.style.display = 'none'; // 
    }, 650); 
  }