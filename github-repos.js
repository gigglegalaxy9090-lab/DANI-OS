async function loadRepositories() {

    const username = "YOUR_GITHUB_USERNAME";

    const url =
    `https://api.github.com/users/${username}/repos`;


    const response = await fetch(url);

    const repos = await response.json();


    const list = document.getElementById("repoList");

    list.innerHTML = "";


    repos.forEach(repo => {

        const item = document.createElement("option");

        item.value = repo.clone_url;

        item.textContent = repo.name;

        list.appendChild(item);

    });

}


loadRepositories();
