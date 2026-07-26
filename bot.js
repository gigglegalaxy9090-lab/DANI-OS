const botName = document.getElementById("botName");
const createBot = document.getElementById("createBot");
const botList = document.getElementById("botList");


let bots = JSON.parse(localStorage.getItem("daniBots")) || [];


function showBots() {

    botList.innerHTML = "";

    bots.forEach(function(bot) {

        const item = document.createElement("li");

        item.textContent = "🤖 " + bot;

        botList.appendChild(item);

    });

}


createBot.addEventListener("click", function() {

    const name = botName.value.trim();


    if(name !== "") {

        bots.push(name);


        localStorage.setItem(
            "daniBots",
            JSON.stringify(bots)
        );


        botName.value = "";

        showBots();

    }

});


showBots();
