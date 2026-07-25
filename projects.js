const input = document.getElementById("projectName");
const button = document.getElementById("addProject");
const list = document.getElementById("projects");

let projects = JSON.parse(localStorage.getItem("daniProjects")) || [];

function showProjects() {
    list.innerHTML = "";

    projects.forEach(function(project) {
        const item = document.createElement("li");
        item.textContent = project;
        list.appendChild(item);
    });
}

button.addEventListener("click", function() {
    const name = input.value.trim();

    if (name !== "") {
        projects.push(name);

        localStorage.setItem(
            "daniProjects",
            JSON.stringify(projects)
        );

        input.value = "";

        showProjects();
    }
});

showProjects();
