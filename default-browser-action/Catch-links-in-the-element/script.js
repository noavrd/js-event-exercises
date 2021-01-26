let contents = document.getElementById("contents");
let link = document.getElementsByTagName("a");

contents.onclick = function(event) {

    function getToLink(link){
        let leave = confirm("Do you really want to leave this site?")
        if(!leave) return false;
    }
    let target = event.target.closest("a");
    if(contents.contains(target) && target) {
        return getToLink(target.getAttribute(link))
    }
}