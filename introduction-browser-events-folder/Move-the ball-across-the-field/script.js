let ball = document.getElementById("ball");
let field = document.getElementById("field");


field.onclick = function (event) {
    let coordsField = this.getBoundingClientRect();
    let coordsBall = {
        left: event.clientX - coordsField.left - field.clientLeft - ball.clientWidth / 2,
        top: event.clientY - coordsField.top - field.clientTop - ball.clientHeight /2
    };

    if (coordsBall.left < 0) {
        coordsBall.left = 0;
    }

    if (coordsBall.top < 0) {
        coordsBall.top = 0;
    }

    if ( (coordsBall.left + ball.clientWidth) > field.clientWidth ) {
        coordsBall.left = field.clientWidth - ball.clientWidth;
    }

    if ( (coordsBall.top + ball.clientHeight) > field.clientHeight) {
        coordsBall.top = field.clientHeight - ball.clientHeight;
    }

    ball.style.left = coordsBall.left + "px";
    ball.style.top = coordsBall.top + "px";
}