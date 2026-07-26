const gameName = document.getElementById("gameName");
const gameType = document.getElementById("gameType");
const createGame = document.getElementById("createGame");
const gameList = document.getElementById("gameList");


let games = JSON.parse(localStorage.getItem("daniGames")) || [];


function showGames() {

    gameList.innerHTML = "";

    games.forEach(function(game) {

        const item = document.createElement("li");

        item.textContent =
        "🎮 " + game.name + " | نوع: " + game.type;

        gameList.appendChild(item);

    });

}


createGame.addEventListener("click", function() {

    const name = gameName.value.trim();

    if(name !== "") {

        const newGame = {
            name: name,
            type: gameType.value
        };


        games.push(newGame);


        localStorage.setItem(
            "daniGames",
            JSON.stringify(games)
        );


        gameName.value = "";

        showGames();

    }

});


showGames();
