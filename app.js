let btn = document.createElement("button");
let btnText = document.createTextNode("Add Square");
btn.appendChild(btnText);
document.body.appendChild(btn);
let divId = 0;

btn.addEventListener("click", function () {
    let div = document.createElement("div");
    div.className = "newDiv";
    document.body.appendChild(div);
    divId++;
    div.appendChild(document.createTextNode(divId));
})