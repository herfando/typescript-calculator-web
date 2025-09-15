"use strict";
const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let currentInput = "";
buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        var _a;
        const value = (_a = btn.textContent) !== null && _a !== void 0 ? _a : "";
        if (value === "C") {
            currentInput = "";
            display.value = "";
        }
        else if (value === "=") {
            try {
                // ⚠️ eval digunakan untuk simple calculator (belajar saja)
                currentInput = eval(currentInput).toString();
                display.value = currentInput;
            }
            catch (_b) {
                display.value = "Error";
                currentInput = "";
            }
        }
        else {
            currentInput += value;
            display.value = currentInput;
        }
    });
});
