const sliderInput = document.getElementById("strength-slider");
const sliderValue = document
  .querySelector(".passgen__length")
  .querySelector(".heading-l");
const checkboxes = document.querySelector(".passgen__checkboxes");
const generateBtn = document.querySelector(".btn");
const passText = document.querySelector(".passgen__text");
const passgenLevels = document.querySelector(".passgen__levels");
const copyPassIcon = document.querySelector(".passgen__icon");
let strengthLevel = 0;
const state = {
  uppercase: {
    includes: false,
    values: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  },
  lowercase: { includes: false, values: "abcdefghijklmnopqrstuvwxyz" },
  symbol: { includes: false, values: `\`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~` },
  number: { includes: false, values: "1234567890" },
};
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
generateBtn.addEventListener("click", () => {
  passText.textContent = randomString(sliderValue.textContent * 1);
});
checkboxes.addEventListener("change", (e) => {
  state[e.target.id].includes = e.target.checked;
  strengthLevel = e.target.checked ? strengthLevel + 1 : strengthLevel - 1;
  passgenLevels.classList = [];
  passgenLevels.classList.add("passgen__levels");
  passgenLevels.classList.add(`passgen__levels--${strengthLevel}`);
});

copyPassIcon.addEventListener("click", async () => {
  await navigator.clipboard.writeText(passText.textContent);
});

function randomString(length) {
  let characters = "";

  for (const key in state) {
    if (state[key].includes) {
      characters += state[key].values;
    }
  }

  if (characters.length === 0) {
    return;
  }
  let result = "";
  while (length > 0) {
    const index = Math.floor(Math.random() * characters.length);
    result += characters[index];
    length--;
  }
  return result;
}
