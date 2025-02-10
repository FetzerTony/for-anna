let textIndex = 0;
let redValue = 0;
function uselessText(hover) {

    const texts = [
        "Stop it!",
        "Don't even try it!",
        "Wieso schon wieder?",
        "Hör auf damit. Diesmal musst du entscheiden!",
        "Ach fick dich!"
    ];

    if (hover) {
        document.querySelector('#idk').innerText = texts[textIndex];
    } else {
        document.querySelector('#idk').innerText = texts[textIndex];
    }

    if (textIndex == texts.length) {
        document.getElementById("idk").parentNode.removeChild(document.getElementById("idk"));
    }

    textIndex++;
}



document.addEventListener("DOMContentLoaded", function() {
    const questions = [
        "Anna, do you want to be my Valentine?",  
        "Are you sure you don’t want to be my Valentine?",  
        "Really sure you don’t have any feelings for me?",  
        "Do you really want to reject me? (Then say no lol)",  
        "Is there absolutely no chance you’d say yes?",  
        "Are you really, really sure you don’t want to be with me?",  
        "You wouldn’t even consider saying yes, would you?",  
        "What if I promise to make it the best Valentine’s Day ever?",  
        "You’re 100% sure there’s nothing I could do to change your mind?",  
        "Even if I showed you how much I care, you’d still say no? (say no if you think so)",  
        "There’s no room for doubt in your mind, is there?",  
        "You’re sure there’s not even a small chance you’d want to be my Valentine?",  
        "No matter how hard I try, you’re still saying no? ((no = yes and yes = no)??)",  
        "This isn’t just a game, you’re really rejecting me? (just use no if you don't want me)",  
        "You’re not even tempted to say yes for a moment?",  
        "There’s absolutely no hope, not even a little?",  
        "This is your final answer? You’re saying no for good?",  
        "Okay, one last time. Would you like to be my Valentine? Please. 😭"
    ];
    let index = 0;

    const questionElement = document.getElementById('question');
    const buttonsContainer = document.querySelector('.buttons');

    function displayQuestion() {
        new TypeIt("#question", {
            strings: [questions[index]],
            speed: 100,
            waitUntilVisible: true,
            afterComplete: function() {
                buttonsContainer.style.display = "flex";
            }
        }).go();
    }

    function displayAnswer(text) {
        new TypeIt("#question", {
            strings: text,
            speed: 70,
            waitUntilVisible: true,
        }).go();
    }



    function startFireworks() {
        const canvas = document.getElementById('fireworksCanvas');
        const fireworks = new Fireworks.default(canvas, {
            autoresize: true,
            opacity: 0.5,
            acceleration: 1.025,
            friction: 0.97,
            gravity: 1.5,
            particles: 50,
            traceLength: 3,
            traceSpeed: 3,
            explosion: 5,
            intensity: 30,
            flickering: 50,
            lineStyle: 'round',
            hue: {
                min: 163,
                max: 360
            },
            mouse: {
                click: false,
                move: false,
                max: 1
            },
            sound: {
                enable: true
            }
        });
        fireworks.start();
    }

    document.getElementById("yes").addEventListener("click", function() {
        questionElement.innerHTML = "";
        displayAnswer("Yayyyyy! 🎉 Danke mein Schatz 💘 peepoHappy!");
        buttonsContainer.style.display = "none";
        // Hier kann der Code für das Feuerwerk eingefügt werden
        startFireworks();
        document.getElementById("container").style.boxShadow = "0 0 35px rgba(211, 79, 255, 0.5), 0 0 60px rgba(255, 77, 77, 0.5)";
    });

    document.getElementById("no").addEventListener("click", function() {
        index++;
        if (index < questions.length) {
            document.querySelector('#question').innerText = questions[index];

            const noButton = document.getElementById("no");
            const currentScale = parseFloat(noButton.style.transform.replace('scale(', '').replace(')', '')) || 1;
            const newScale = currentScale * 0.95; // Verringert den Button um 10%
            noButton.style.transform = `scale(${newScale})`; // Wendet die neue Skalierung an
            
            redValue = Math.min(redValue + 16, 255); // Erhöht den roten Anteil, aber nicht über 255
            document.getElementById("container").style.boxShadow = `0 0 40px rgba(${redValue}, 0, 0, 1)`;
        } else {
            questionElement.innerHTML = "Okay... 🚬😭🔫";
            buttonsContainer.style.display = "none";
            document.getElementById("container").style.boxShadow = "0 0 40px rgba(0, 0, 0, 1)";
            
        }
    });

    displayQuestion();
});