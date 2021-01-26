let removeButton = document.getElementsByClassName("remove-button");
let container = document.getElementById("container");

container.onclick =  function(event){
    if (event.target.tagName !== "BUTTON") {
        return;
    }
    let del = event.target.closest(".pane");
    del.remove();

};