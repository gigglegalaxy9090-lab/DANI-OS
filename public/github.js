const button =
document.getElementById("connectGitHub");


const repoList =
document.getElementById("repoList");


const repoInfo =
document.getElementById("repoInfo");



button.onclick = async function(){


let username =
prompt("نام کاربری GitHub را وارد کن:");



if(!username){
    return;
}



let response =
await fetch(
`https://api.github.com/users/${username}/repos`
);



let repos =
await response.json();



repoList.innerHTML = "";



repos.forEach(repo => {


let option =
document.createElement("option");


option.textContent =
repo.name;


option.value =
repo.html_url;


repoList.appendChild(option);



});



};



repoList.onchange = function(){


repoInfo.innerHTML =
"🔗 لینک مخزن:<br>" + repoList.value;


};
