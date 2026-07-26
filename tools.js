const buttons = document.querySelectorAll("button");
const area = document.getElementById("toolArea");

buttons.forEach(function(button) {

    button.addEventListener("click", function() {

        const tool = button.getAttribute("data-tool");

        if (tool === "website") {
            area.innerHTML = `
            <h2>🌐 ابزار ساخت سایت</h2>
            <p>اینجا در نسخه‌های بعدی ابزار ساخت سایت اضافه می‌شود.</p>
            `;
        }

        if (tool === "file") {
            area.innerHTML = `
            <h2>📄 ابزار ساخت فایل</h2>
            <p>اینجا ابزارهای ساخت فایل قرار می‌گیرند.</p>
            `;
        }

        if (tool === "templates") {
            area.innerHTML = `
            <h2>🎨 قالب‌های آماده</h2>
            <p>اینجا قالب‌های آماده DANI OS قرار می‌گیرند.</p>
            `;
        }

    });

});
