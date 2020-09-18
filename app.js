document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    let btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    let divId = 0;

    let squareContainer = document.createElement("div");
    squareContainer.className = "container";
    document.body.appendChild(squareContainer);

    btn.addEventListener("click", function () {
        let div = document.createElement("div");
        div.className = "newDiv";
        squareContainer.appendChild(div);
        let valueSquareId = document.createElement("span");
        valueSquareId.className = "divId";
        valueSquareId.innerText = divId;
        div.appendChild(valueSquareId);
        divId++;

        div.addEventListener("mouseover", function () {
            valueSquareId.style.display = "inline";
        });

        div.addEventListener("mouseout", function () {
            valueSquareId.style.display = "none";
        });
    });
});