document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("button");

    buttons.forEach(function (button) {
        button.addEventListener("click", function () {
            const buttonText = button.textContent.trim();

            if (buttonText === "ورود") {
                alert("این بخش در نسخه بعدی DANI OS فعال می‌شود 🚀");
            }

            if (buttonText === "ایجاد") {
                alert("ساخت پروژه جدید در نسخه بعدی فعال می‌شود ✨");
            }
        });
    });
});
