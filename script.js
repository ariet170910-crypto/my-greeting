const nameInput = document.querySelector("#name");
const occasion = document.querySelector("#occasion");
const createBtn = document.querySelector("#createBtn");
const againBtn = document.querySelector("#againBtn");

const result = document.querySelector("#result");
const resultTitle = document.querySelector("#resultTitle");
const resultText = document.querySelector("#resultText");
const effects = document.querySelector("#effects");

// Поздравления для разных праздников
const greetings = {

    birthday: [
        "Пусть каждый день приносит вам радость, улыбки и новые возможности! Желаю исполнения самых заветных желаний, верных друзей и незабываемых моментов. Пусть ваша жизнь будет наполнена счастьем! 🎂",
        "🎂 С днём рождения! Желаю Вам крепкого здоровья, безграничного счастья, искренней любви и исполнения самых заветных желаний. Пусть каждый день приносит Вам радость, приятные сюрпризы и незабываемые моменты. Пусть рядом всегда будут добрые и искренние люди, а все мечты постепенно становятся реальностью. Оставайтесь такой же прекрасной, яркой и неповторимой! ❤️✨"
    ],

    march8: [
        "🌷 С 8 Марта! Желаю Вам бесконечного счастья, весеннего настроения, искренних улыбок и исполнения всех заветных желаний. Пусть каждый день будет наполнен теплом, заботой и приятными сюрпризами. Пусть в Вашей жизни всегда цветут цветы счастья, а глаза сияют от радости. Оставайтесь такой же прекрасной и неповторимой! 💐❤"
    ],

    newyear: [
        "🎄 С Новым годом! Желаю Вам огромного счастья, крепкого здоровья, душевного тепла и исполнения самых заветных желаний. Пусть новый год принесёт в Вашу жизнь много радостных событий, приятных сюрпризов и незабываемых моментов. Пусть каждый день будет наполнен улыбками, любовью и новыми возможностями. Желаю, чтобы все Ваши мечты стали реальностью, а рядом всегда были дорогие сердцу люди! ✨❤️"
    ],

    graduation: [
        "🎓 Поздравляю Вас с выпускным! Пусть этот прекрасный день станет началом новой, удивительной главы Вашей жизни. Желаю Вам смело идти к своим мечтам, достигать больших высот и никогда не сомневаться в своих возможностях. Пусть впереди Вас ждут яркие события, интересные знакомства, большие успехи и счастливые моменты. Пусть все дороги ведут к исполнению Ваших самых заветных желаний! ❤️✨"
    ],

    success: [
        "Поздравляю с твоим достижением! Каждый большой результат начинается с маленького шага. Пусть впереди будет ещё больше побед и поводов гордиться собой! 🏆",
        "🏆 Поздравляю Вас с достижением цели! Это прекрасный повод гордиться собой и своими успехами. Желаю Вам никогда не останавливаться на достигнутом, смело идти вперёд и покорять новые вершины. Пусть каждая Ваша мечта становится реальностью, а впереди ждут ещё более грандиозные победы. Верьте в себя, ведь всё самое интересное ещё впереди! ✨❤️"
    ],

    just: [
        "💛 Просто хочу пожелать тебе побольше счастливых моментов, искренних улыбок и исполнения желаний. Пусть каждый день приносит что-то прекрасное, а в твоей жизни всегда будет место для радости, тепла и маленьких чудес. Ты заслуживаешь всего самого хорошего! 🌸"
    ]

};

// Создание поздравления
function createGreeting() {

    const name = nameInput.value.trim();
    const selectedOccasion = occasion.value;

    if (name === "") {
        alert("Пожалуйста, введи своё имя! 😊");
        nameInput.focus();
        return;
    }

    // Выбираем случайное поздравление
    const messages = greetings[selectedOccasion];

    const randomIndex = Math.floor(
        Math.random() * messages.length
    );

    const message = messages[randomIndex];

    // Показываем результат
    resultTitle.textContent = `Для тебя, ${name}! ❤️`;
    resultText.textContent = message;

    result.classList.remove("hidden");

    // Запускаем конфетти
    createConfetti();

    // Прокручиваем страницу к поздравлению
    result.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });
}

// Анимация конфетти
function createConfetti() {

    const symbols = ["✨", "⭐", "💛", "🌸", "🎉", "✦"];

    for (let i = 0; i < 40; i++) {

        const particle = document.createElement("span");

        particle.classList.add("particle");

        particle.textContent =
            symbols[Math.floor(Math.random() * symbols.length)];

        particle.style.left = Math.random() * 100 + "vw";

        particle.style.animationDuration =
            (2 + Math.random() * 3) + "s";

        particle.style.fontSize =
            (12 + Math.random() * 18) + "px";

        effects.appendChild(particle);

        // Удаляем элемент после анимации
        particle.addEventListener("animationend", function() {
            particle.remove();
        });

    }

}

// Нажатие кнопки
createBtn.addEventListener("click", createGreeting);

// Создание нового поздравления
againBtn.addEventListener("click", function() {

    result.classList.add("hidden");

    nameInput.value = "";

    nameInput.focus();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});