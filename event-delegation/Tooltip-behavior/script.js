let tooltip = document.getElementsByClassName("tooltip"); 
let elem;
document.onmouseover = (event) => {
    let tool = event.target.dataset.tooltip;
    if (!tool) {
        return;
    }
    elem = document.createElement("div");
    elem.className = "tooltip";
    elem.innerHTML = tool;
    document.body.append(elem);

    let border = event.target.getBoundingClientRect();
    let left = border.left;
    let top = border.top - elem.offsetHeight - 5;
    if (top < 0) {
        top = border.top + event.target.offsetHeight + 5;
    }

    elem.style.left = left + "px";
    elem.style.top = top + "px";

};

document.onmouseout = () => {
    if (elem) {
        elem.remove();
        elem = null;
    }
};
