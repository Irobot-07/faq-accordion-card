
function expand(value) {
    let question = document.getElementById("que" + value);
    let answer = document.getElementById("ans" + value);
    let arrow = document.getElementById("arrow" + value);

    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block";
        question.style.fontWeight = "700";
        arrow.style.transform = "rotateX(180deg)";
    } else {
        answer.style.display = "none";
        question.style.fontWeight = "400";
        arrow.style.transform = "rotateX(360deg)";
    }
}