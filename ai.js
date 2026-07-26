const button = document.getElementById("askBtn");
const question = document.getElementById("question");
const answer = document.getElementById("answer");


button.addEventListener("click", function () {

    const text = question.value.trim();

    if (text === "") {
        answer.innerHTML = "لطفاً یک سوال یا ایده بنویس.";
        return;
    }


    if (text.includes("سایت")) {
        answer.innerHTML = 
        "برای ساخت سایت پیشنهاد می‌کنم اول ساختار صفحه، طراحی و امکانات را مشخص کنی.";
    }

    else if (text.includes("بازی")) {
        answer.innerHTML =
        "برای ساخت بازی، اول نوع بازی و امکانات آن را مشخص کن.";
    }

    else if (text.includes("ربات")) {
        answer.innerHTML =
        "برای ساخت ربات باید بخش منطق، دستورات و اتصال‌ها طراحی شود.";
    }

    else {
        answer.innerHTML =
        "ایده خوبی است! در نسخه‌های بعدی DANI OS هوش مصنوعی قوی‌تر می‌شود.";
    }

});
