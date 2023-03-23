/**-- index text animation */
const content = ".PORT \nFOLIO{\n }   ";
const text = document.querySelector(".text");
let i = 0;

function typing(){
    if (i < content.length) {
    let txt = content.charAt(i);
    text.innerHTML += txt;
    i++;
    }
}
setInterval(typing, 230)

/**-- dark & light */
function darkMode() {
    var body = document.body;
    body.classList.toggle("dark-mode");

    var button = document.getElementById("button");
    if(button.innerHTML == "light Mode") {
        button.innerHTML = "Dark Mode";
    } else{
        button.innerHTML = "light Mode";
    }
}

/**-- work fade out */
$(function() {
    $("#work_button").on("click", function() {
        // id가 "divBox"인 요소를 1초에 걸쳐 점점 나타나게 하거나 사라지게 함.
        $("#divBox").fadeToggle(500);
    });
});