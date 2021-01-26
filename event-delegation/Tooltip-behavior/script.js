let button = document.getElementsByTagName("button"); 

document.addEventListener("onmouseover", function(event) {
    let tool = event.target.dataset.tooltip;
    if(!tool) {
        return;
    }

    let elem = document.createElement("div");
    elem.className = "tooltip";
    elem.innerHTML = tool;
    document.body.append(elem);

    let above = event.target.getBoundingClientReact();
    let left = above.left + (event.target.offsetWidth - elem.offsetWidth) / 2;

    if (left < 0) {
        left = 0;
    }

    let top = above.top - elem.offsetHeight - 5;
    if (top < 0) {
        top = above.top + event.target.offsetHeight + 5;
    }
    elem.style.left = left + "px";
    elem.style.top = top + "px";
});

document.addEventListener("onmouseout", function() {
    if (target.dataset.tooltip) {
        target.dataset.tooltip.remove();
        target.dataset.tooltip = null;
    }
})
