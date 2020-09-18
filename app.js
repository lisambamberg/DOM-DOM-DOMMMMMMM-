document.addEventListener("DOMContentLoaded", function () {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    let divId = 1;
    const colorArray = ["red", "orange", "yellow", "green", "blue", "purple"];

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

        div.addEventListener("click", function () {
            const randomNum = Math.floor((Math.random() * colorArray.length));
            div.style.backgroundColor = colorArray[randomNum];
        });

        div.addEventListener("dblclick", function () {
            if (divId % 2 == 0) {
                if (div.nextElementSibling) {
                    div.nextElementSibling.remove();
                } else {
                    window.alert("No square after the clicked square!");
                }
            } else if (divId % 2 == 1) {
                if (div.previousElementSibling) {
                    div.previousElementSibling.remove();
                } else {
                    window.alert("No square before the clicked square!");
                }
            }
        });
    });
});
