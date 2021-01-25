let div = document.getElementsByClassName("pane");

for (let inner of div) {
    const button = '<button class="remove-button">[x]</button>';
    inner.insertAdjacentHTML("afterbegin", button);
    inner.firstChild.onclick = function(){
        inner.hidden = true;
    }
}
