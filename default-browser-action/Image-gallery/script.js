let link = document.getElementsByTagName("href");
let picture = document.getElementById("thumbs");
let bigPicture = document.getElementById("largeImg");
let title = document.getElementsByTagName("title");
let image = document.getElementsByTagName("image");

picture.onclick = function(event){
    let newPic = event.target.closest("a");

    if(!newPic) {
        return;
    }
    changePicture(bigPicture.link, bigPicture.title);
    event.preventDefault();
}

function changePicture(pic, headline) {
    bigPicture.src = pic;
    bigPicture.alt = headline;

}
