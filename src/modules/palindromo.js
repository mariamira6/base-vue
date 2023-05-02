import respBack from "./utils.js";

showWord() {
  const $select = document.querySelector('#content');
  const $div = document.createElement('div');
  $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                    <p class="text-xl text-white font-bold">Introduce una palabra y te diré si es un palíndromo o no.</p>
                    <input id="nums" type="text" placeholder="Introduce una palabra" class="input input-bordered input-info w-full max-w-xs" />
                    <button id="btn" class="bg-white text-black">Aceptar</button>
                      </div>`
  $select.appendChild($div);
  const btnShow = document.querySelector("#btn");
  btnShow.addEventListener("click", () => {
    this.pali2(nums.value);
  })
},

pali2(word) {
  let reves = "";
  let res = false;
  for (let i = word.length - 1; i >= 0; i--) {
    reves = reves + word[i];
  }
  if (word == reves) {
    respBack("¡Palíndromo!", `${word} es un palíndromo`, "success", "Aceptar")
    res = true;
    return res;
  }
  if (word !== reves) {
    respBack("La palabra es muy molona pero...", `${word} no es un palíndromo`, "error", "Insertar otra palabra")
    return res;
  }
}

import showWord()
