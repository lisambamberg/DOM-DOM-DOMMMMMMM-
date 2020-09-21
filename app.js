document.addEventListener("DOMContentLoaded", function () {
    const btn = document.createElement("button");
    const btnText = document.createTextNode("Add Square");
    btn.appendChild(btnText);
    document.body.appendChild(btn);
    let divId = 1;

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

        squareContainer.appendChild(div);

        div.addEventListener("click", function () {
            div.style.backgroundColor = getRandomColor();
        })

        div.addEventListener("dblclick", function () {
            if (divId % 2 == 0) {
                if (div.nextElementSibling) {
                    div.nextElementSibling.remove();
                } else {
                    alert("No element to remove!");
                }
            } else {
                if (div.previousElementSibling) {
                    div.previousElementSibling.remove();
                } else {
                    alert("No element to remove!");
                }
            }
        });
    });

    function getRandomColor() {
        let letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
