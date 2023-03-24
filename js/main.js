const sliderInput = document.getElementById("strength-slider");
const sliderValue = document
  .querySelector(".passgen__length")
  .querySelector(".heading-l");
const checkboxes = document.querySelector(".passgen__checkboxes");
const passgenLevels = document.querySelector(".passgen__levels");
let strengthLevel = 0;

sliderInput.oninput = function () {
  var value = ((this.value - this.min) / (this.max - this.min)) * 100;
  this.style.background =
    "linear-gradient(to right, var(--clr-green) 0%, var(--clr-green) " +
    value +
    "%, transparent " +
    value +
    "%, transparent 100%)";
  sliderValue.textContent = `${this.value}`;
};

checkboxes.addEventListener("change", (e) => {
  strengthLevel = e.target.checked ? strengthLevel + 1 : strengthLevel - 1;
  passgenLevels.classList = [];
  passgenLevels.classList.add("passgen__levels");
  passgenLevels.classList.add(`passgen__levels--${strengthLevel}`);
});

const symbol = `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~`;
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const number = "1234567890";

console.log(specialChars);
