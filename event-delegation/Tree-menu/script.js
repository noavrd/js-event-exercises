let tree = document.getElementById("tree");

tree.onclick = function(event) {
    let newTree = event.target.dataset.toggleId;
    if(!newTree) {
        return;
    }
    newTree = event.target.event.closest("ul");
    if(newTree) {
        newTree.hidden = !newTree.hidden;
    }
    newTree = event.target.event.closest("li");
    if(newTree) {
        newTree.hidden = !newTree.hidden;
    }
};