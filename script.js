// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");

for (let i = 0; i < myNodelist.length; i++) {
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}
// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
console.log(typeof close);

for (let index = 0; index < close.length; index++) {
    close[index].onclick = function () {
        let div = this.parentElement;
        div.style.display = "none"
    }

}

// Add a "checked" symbol when clicking on a list item
let list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    // Tıklanan öğenin bir <li> öğesi olup olmadığını kontrol et
    if (ev.target.tagName === 'LI') {
        // Tıklanan öğenin checked sınıfını ekleyin veya kaldırın
        ev.target.classList.toggle('checked');
    }
});

function addElement() {

    let li = document.createElement("li");
    let inputValue = document.querySelector("#input").value;
    let t = document.createTextNode(inputValue);

    li.appendChild(t);

    if (inputValue === "") { alert("You must write something") }
    else { document.getElementById("myList").appendChild(li) }
    document.getElementById("input").value = "";

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement;
            div.style.display = "none";

        }
    }













}

