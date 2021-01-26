let allA = document.querySelectorAll("a");
for (let oneA of allA) {
    oneA.addEventListener("click", function(event) {
        event.preventDefault();
        let bigImage = document.getElementById("largeImg");
        bigImage.setAttribute("src", oneA.getAttribute("href"));
    });
}

