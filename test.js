const clickTest = document.querySelector("#charactor");
const main = document.querySelector("#main");

function onClick() {
    main.classList.add("disappear");
}

clickTest.addEventListener("click", onClick);