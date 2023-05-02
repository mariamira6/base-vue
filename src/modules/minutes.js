import { defineStore } from "pinia";
import respBack from "../utils.js"

export const useContent = defineStore('solution', {
  state: () => ({

  }),
  getters: {

  },
  actions: {
    minutesToSeconds() {
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una cantidad de minutos (por ejemplo, 1578) y se transformarán en segundos.</p>
                        <input id="nums" type="text" placeholder="Introduce una cantidad" class="input input-bordered input-info w-full max-w-xs" />
                        <button id="btn" class="bg-white text-black">Aceptar</button>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        let response = nums.value;
        function minutesSec(response) {
          let seconds = minutes * 60;
          return seconds;
          respBack("¡Cantidad transformada!", `${minutes} minutos son ${seconds} segundos`, "success", "Aceptar")
        };
      })
    }
  };
})


