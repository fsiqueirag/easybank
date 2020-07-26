let parent = document.querySelector('.modal-parent');
let btn = document.querySelector('.menu-icon');
let X = document.querySelector('.X');
let section = document.querySelector('section');

btn.addEventListener('click', appear);

function appear() {
    parent.style.display = "block";
    section.style.filter = "blur(6px)";
}

X.addEventListener("click", disappearX)

function disappearX() {
    parent.style.display = "none";
    section.style.filter = "blur(0)";
}

parent.addEventListener("click", disappearParent)
function disappearParent(e) {
    if (e.target.className == "modal-parent") {
        parent.style.display = "none";
        section.style.filter = "blur(0)";
    }
}