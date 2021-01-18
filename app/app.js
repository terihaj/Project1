const inputField = document.querySelector(".input");
const inputButton = document.querySelector(".add");
const listOfGames = document.querySelector(".items");

if (inputField.value.length === 0) {
    inputButton.disabled = true;
} else {
    inputButton.disabled = false;
}

inputButton.addEventListener("click", () => {
    // console.log(inputField.value);
    
        /* alert("ENTER THE ITEM BRO 🤬🤬🤬");
        return 0; */

    let spaceOfList = document.createElement("DIV");
    let item = document.createElement("LI");
    let button = document.createElement("BUTTON");

    spaceOfList.classList.add("item-container");
    item.classList.add("item");
    button.classList.add("complete");

    item.innerHTML = inputField.value;
    button.innerHTML = "DONE";

    spaceOfList.appendChild(item);
    spaceOfList.appendChild(button);
    listOfGames.appendChild(spaceOfList);
    
    item.addEventListener("dblclick", (e) => {
        e.target.parentElement.remove();
    });

    let flag = true;
    button.addEventListener("click", (e) => {
        item.style.textDecoration = flag ? "line-through" : "none";
        item.style.opacity = flag ? 0.3 : "";
        button.innerHTML = flag ? "NOPE" : "DONE";
        flag = !flag;
    });

});
