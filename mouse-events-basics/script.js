let li = document.getElementsByTagName("li");
let ul = document.getElementsByTagName("ul");

li.onclick = function(event) {
if (event.target.tagName !== "li") {
    return;
}
if(event.ctrlKey) {
    list(event.target);
} else {
    select(event.target);
}
};

ul.onmousedown = function() {
    return false;
};

function select(li) {
    let sel = ul.querySelectorAll(".selected");
    for (let element of sel) {
        element.classList.remove(".selected");
    }
    li.classList.add(".selected");
}

function list(li) {
    li.classList.toggle(".selected");
}