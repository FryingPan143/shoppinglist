let input = document.getElementById("inputField");
let submit = document.getElementById("submitBtn");

let listBox = document.getElementById("listBox"); //där alla items skall displayas 



input.addEventListener("keyup", function (e) {
    let iValue = input.value;
    if (e.key === "Enter" && iValue.length > 0) {
        submit.click(iValue);
    }
});

submit.addEventListener("click", function () {
    let iValue = input.value;
    if (iValue.length > 0) {
        generateItem(iValue);
        clearInput();
    }
});

function generateItem(item) {

    let newItem = document.createElement("div");
    newItem.classList.add("list-item");

    let itemTitle = document.createElement("p");
    itemTitle.classList.add("item-title");
    itemTitle.innerHTML = item;
    itemTitle.style.color = "black";

    let itemCheck = document.createElement("p");
    itemCheck.classList.add("item-check");
    itemCheck.innerHTML = "&#128504;";

    let itemDelete = document.createElement("p");
    itemDelete.classList.add("item-delete");
    itemDelete.innerHTML = "&#10799;";


    newItem.appendChild(itemTitle);
    newItem.appendChild(itemCheck);
    newItem.appendChild(itemDelete);
    listBox.appendChild(newItem);

    itemCheck.addEventListener("click", function () {
        checkItem(itemTitle);
    })

    itemDelete.addEventListener("click", function () {
        deleteItem(newItem);
    })


}

function deleteItem(item) {
    item.remove();
}

function checkItem(item) {
    if (item.style.color == "black") {
        item.style.color = "green";
    } else {
        item.style.color = "black";
    }
}

function clearInput() {
    input.value = "";
}