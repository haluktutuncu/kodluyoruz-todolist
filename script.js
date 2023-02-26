let textbox = document.getElementById("textbox");
let addBtn = document.getElementById("add-btn");
let checkBtn = document.getElementById("tick-btn")
let main = document.getElementById("main");
let toCopy = document.querySelector(".do-element");
let child = toCopy.querySelector("#do")
let deleteBtns = document.getElementsByClassName("delete")
let items = document.querySelectorAll(".do-element")
let deleter = document.getElementById("delete")

let isFirstItem = true;

addBtn.addEventListener("click", () => {
    if (textbox.value == "") {
        alert("Enter a task");
    } else {
        child.innerHTML = textbox.value;
        toCopy.style.display = "flex";

        let paragraf = toCopy.cloneNode(true);
        main.insertBefore(paragraf, main.childNodes[0])
        textbox.value = ""

        if (isFirstItem) {
            main.removeChild(main.childNodes[2]);
            isFirstItem = false;
        }



    }
})


