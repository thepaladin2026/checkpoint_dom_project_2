document.addEventListener("DOMContentLoaded", function () {
    let colorBox = document.getElementById("color-box");
    let changeColorBtn = document.getElementById("change-color-btn");

    function getRandomColor() {
        let letters = "0123456789ABCDEF";
        let randomColor = "#";

        for (let i = 0; i < 6; i++) {
            let oneLetter = Math.floor(Math.random() * 16);
            randomColor += letters[oneLetter];
        }

        return randomColor;
    }

    changeColorBtn.addEventListener("click", function () {
        colorBox.style.backgroundColor = getRandomColor();
    });
});
