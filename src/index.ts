const display = document.getElementById("display") as HTMLInputElement;
const buttons = document.querySelectorAll("button");

let currentInput: string = "";

buttons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const value = btn.textContent ?? "";
     if (value === "C") {
      currentInput = "";
      display.value = "";
    } else if (value === "=") {