let li = document.getElementsByTagName("li");
let ul = document.getElementById("ul");

ul.onclick = function(event) {
if (event.target.tagName !== "LI") {
    return;
}
if(event.ctrlKey) {
    selectMoreThanOne(event.target);
} else {
    selectFromList(event.target);
}
};

//a function that select only one li
function selectFromList(select) {
    let sel = ul.querySelectorAll(".selected");
    for (let element of sel) {
        element.classList.remove("selected");
    }
    select.classList.add("selected");
}

function selectMoreThanOne(str) {
    str.classList.toggle("selected");
}