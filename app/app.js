const inputField = document.querySelector(".input");
const inputButton = document.querySelector(".add");
const listOfGames = document.querySelector(".items");

inputButton.addEventListener("click", () => {
    // console.log(inputField.value);
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

    let flag = true;
    
    item.addEventListener("dblclick", (e) => {
        e.target.parentElement.remove();
    });

    button.addEventListener("click", (e) => {
        if (flag) {
            item.classList.add("crossed-out");
        } else {
            item.classList.remove("crossed-out");
        }
        item.style.opacity = flag ? 0.3 : "";
        button.innerHTML = flag ? "NOPE" : "DONE";
        flag = !flag;
    });

});
