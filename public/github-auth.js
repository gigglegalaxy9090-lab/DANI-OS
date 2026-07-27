// DANI OS GitHub Authentication

const githubClientId = "YOUR_GITHUB_CLIENT_ID";


function connectGitHubAccount() {

    const redirectUrl = window.location.origin;


    const githubUrl =
    "https://github.com/login/oauth/authorize" +
    "?client_id=" + githubClientId +
    "&scope=repo" +
    "&redirect_uri=" + redirectUrl;


    window.location.href = githubUrl;

}



const githubButton =
document.getElementById("connectGitHub");


if (githubButton) {

    githubButton.addEventListener(
        "click",
        connectGitHubAccount
    );

}
