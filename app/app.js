const inputField = document.querySelector(".input");
const inputButton = document.querySelector(".add");
const listOfGames = document.querySelector(".items");
inputButton.disabled = true;

inputField.addEventListener("keyup", () => {
    if (inputField.value.length <= 0) {
        inputButton.disabled = true;
    } else {
        inputButton.disabled = false;
    }
});

console.log(localStorage);
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

data.forEach((item) => {
    makeDiv(item)
});

console.log(data);

inputButton.addEventListener("click", () => {

    itemsArray.push(inputField.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));
    console.log(localStorage);

    makeDiv(inputField.value);
    
    inputField.value = "";
    inputButton.disabled = true;
});

function makeDiv(itemInInput) { 
    let spaceOfList = document.createElement("DIV");
    let item = document.createElement("LI");
    let button = document.createElement("BUTTON");

    spaceOfList.classList.add("item-container");
    item.classList.add("item");
    button.classList.add("complete");

    item.innerHTML = itemInInput;
    button.innerHTML = "DONE";
    
    spaceOfList.appendChild(item);
    spaceOfList.appendChild(button);
    listOfGames.appendChild(spaceOfList);

    item.addEventListener("dblclick", (e) => {
        e.target.parentElement.remove();
        let removeItem = e.target.innerHTML;
        data.splice((data.indexOf(removeItem)), 1);
        itemsArray = data;
        localStorage.setItem('items', JSON.stringify(itemsArray));
    });

    let flag = true;
    button.addEventListener("click", (e) => {
        item.style.textDecoration = flag ? "line-through" : "none";
        item.style.opacity = flag ? 0.3 : "";
        button.innerHTML = flag ? "NOPE" : "DONE";
        flag = !flag;
    });
}
