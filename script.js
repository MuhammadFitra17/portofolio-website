const words = ["Web Developer.", "Frontend Engineer.", "IT Enthusiast."];
let wordIndex = 0;
let timer;

function typingEffect() {
    let currentWord = words[wordIndex].split("");
    var loopTyping = function() {
        if (currentWord.length > 0) {
            document.querySelector('.typing-text').innerHTML += currentWord.shift();
        } else {
            setTimeout(deletingEffect, 2000);
            return false;
        }
        timer = setTimeout(loopTyping, 100);
    };
    loopTyping();
}

function deletingEffect() {
    let currentWord = words[wordIndex].split("");
    var loopDeleting = function() {
        if (currentWord.length > 0) {
            currentWord.pop();
            document.querySelector('.typing-text').innerHTML = currentWord.join("");
        } else {
            if (words.length > (wordIndex + 1)) {
                wordIndex++;
            } else {
                wordIndex = 0;
            }
            setTimeout(typingEffect, 500);
            return false;
        }
        timer = setTimeout(loopDeleting, 50);
    };
    loopDeleting();
}

document.addEventListener("DOMContentLoaded", function() {
    if(document.querySelector('.typing-text')) {
        typingEffect();
    }
});