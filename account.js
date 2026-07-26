const projectCount = document.getElementById("projectCount");


let projects = JSON.parse(localStorage.getItem("daniProjects")) || [];


if (projects.length > 0) {

    projectCount.innerHTML =
    "📁 تعداد پروژه‌های شما: " + projects.length;

} else {

    projectCount.innerHTML =
    "هنوز پروژه‌ای ساخته نشده است.";

}
