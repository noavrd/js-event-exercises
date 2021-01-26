let tree = document.getElementById("tree");
let allLi = document.querySelectorAll("li");
for (let li of allLi) {
    let span = document.createElement("span");
    li.append(span);
    span.appendChild(span.nextSibling);
}

tree.addEventListener("click", (event) => {
        if (event.target.tagName !== "SPAN") {
            return;
        }
        let select = event.target.parentNode.querySelector("ul");
        if (!select) {
            return;
        }
        select.hidden = !select.hidden;
    });