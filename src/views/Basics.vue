<template>
  <body class="bg-[url('/./assets/img/text1.jpg')] w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center">
      <div class="dropdown dropdown-hover mt-5">
        <label tabindex="0" class="btn bg-sky-500 text-white hover:bg-sky-800 m-1">Elige uno de los ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-sky-500 text-white rounded-box w-52">
          <li><span @click="showWord" class="hover:bg-sky-800">Palíndromos</span></li>
          <li><span @click="showContent" class="hover:bg-sky-800">Minutos-segundos</span></li>
          <li><span class="hover:bg-sky-800">Al revés</span></li>
          <li><span class="hover:bg-sky-800">Número de teléfono</span></li>
        </ul>
      </div>
    </div>
    <div id="content"></div>
  </body>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue"
import respBack from "../utils.js";
export default {
  name: "Basics",
  components: { Breadcrumbs },
  data() {
    return {
      bc: [
        {
          name: "Nivel fácil",
          hover: "hover:text-blue-300"
        }
      ]
    }
  },
  methods: {
    showContent() {
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
        let minutos = nums.value;
        let segundos = nums.value * 60;
        respBack("¡Cantidad transformada!", `${minutos} minutos son ${segundos} segundos`, "success", "Aceptar")
      })
    },

    showWord() {
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una palabra y te diré si es un palíndromo o no.</p>
                        <p class="text-lg text-gray-300 font-bold">Utiliza sólo minúsculas o sólo mayúsculas</p>
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
    },
  }
}
</script>

<style>
</style>
