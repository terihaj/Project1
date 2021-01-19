const inputField = document.querySelector(".input");
const inputButton = document.querySelector(".add");
const listOfGames = document.querySelector(".items");
inputButton.disabled = true;

//Disable ADD button if there's nothing in the input field
inputField.addEventListener("keyup", () => {
    return inputField.value.length <= 0 
            ? inputButton.disabled = true 
            : inputButton.disabled = false
});

//Load and set local storage
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : []
localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

//Display local storage key-values
data.forEach((item) => {
    makeDiv(item)
});

/*Push an item to the local storage array, create an element in HTML
and reset the input field */
function pushToStorage() {
    itemsArray.push(inputField.value);
    localStorage.setItem('items', JSON.stringify(itemsArray));

    makeDiv(inputField.value);

    inputField.value = "";
    inputButton.disabled = true;
}

/*Remove the element from the HTML, remove the item from local storage array
and update local storage array*/
function removeElement(e) {
    e.target.parentElement.remove();
    let removeItem = e.target.innerHTML;

    data.splice((data.indexOf(removeItem)), 1);
    itemsArray = data;
    localStorage.setItem('items', JSON.stringify(itemsArray));
}

//Create an element in HTML and add event listeners to it
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
        removeElement(e);    
    });

    item.addEventListener("touchend", (e) => {
        removeElement(e);
    });

    let flag = true;
    button.addEventListener("click", (e) => {
        item.style.textDecoration = flag ? "line-through" : "none";
        item.style.opacity = flag ? 0.3 : 1;
        button.innerHTML = flag ? "NOPE" : "DONE";
        flag = !flag;
    });
}

//Event listeners to add items to the local storage array
inputButton.addEventListener("click", () => {
    pushToStorage();
    inputField.focus();
});

inputField.addEventListener("keyup", (e) => {
    if (e.keyCode === 13) {
        pushToStorage();
    }
});