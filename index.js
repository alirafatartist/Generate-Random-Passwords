let copyBtn = document.querySelector(".fa");
let input = document.getElementById("input");
// generate password function
function genpass(length = 16) {
  const characters =
    "!\"/#/$%&'()*+,-./:;<=>?@[]^_`{|}~abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let password = "";

  for (let i = 0; i < length; i++) {
    let randomValue = characters[Math.floor(Math.random() * characters.length)];
    password += randomValue;
  }

  input.value = password;
  copyBtn.classList.replace("fa-check", "fa-clone");
  copyBtn.innerHTML = "";
}
// copy password function
function copyPassword() {
  navigator.clipboard.writeText(input.value);
  copyBtn.classList.replace("fa-clone", "fa-check");
}
