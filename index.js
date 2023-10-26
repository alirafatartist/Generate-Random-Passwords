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
  copyBtn.classList.replace("green", "fa-clone");
  copyBtn.innerText = "";
  copyBtn.style.fontFamily = "";
}
// copy password function
async function copyPassword() {
  navigator.clipboard.writeText(input.value);
  copyBtn.classList.replace("fa-clone", "fa-check");
  await new Promise((test) => setTimeout(test, 1000));
  copyBtn.innerText = "Copied";
  copyBtn.classList.replace("fa-check", "green");
  copyBtn.style.fontFamily = "Tahoma";
}
