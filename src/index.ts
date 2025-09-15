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
      try {
        // ⚠️ eval digunakan untuk simple calculator (belajar saja)
        currentInput = eval(currentInput).toString();
        display.value = currentInput;
      } catch {
        display.value = "Error";
        currentInput = "";
      }
    } else {
      currentInput += value;
      display.value = currentInput;
    }
  });
});
