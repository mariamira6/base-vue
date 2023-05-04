<template>
  <body class="bg-[url('/./assets/img/bg13.jpg')] bg-cover w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center mt-5">
      <div class="dropdown dropdown-hover">
        <label tabindex="0" class="btn bg-sky-500 text-white hover:bg-sky-800 m-1">Elige uno de los ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-sky-500 text-white rounded-box w-52">
          <li><span @click="showWord" class="hover:bg-sky-800">Palíndromos</span></li>
          <li><span @click="showSeconds" class="hover:bg-sky-800">Minutos-segundos</span></li>
          <li><span @click="showRandomNumber" class="hover:bg-sky-800">Número aleatorio</span></li>
          <li><span class="hover:bg-sky-800">Número de teléfono</span></li>
        </ul>
      </div>
    </div>
    <div id="content"></div>
  </body>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue"
import Dropdown from "../components/Dropdown.vue"
import respBack from "../utils.js";
export default {
  name: "Basics",
  components: { Breadcrumbs, Dropdown },
  data() {
    return {
      bc: [
        {
          name: "Nivel fácil",
          hover: "hover:text-blue-300"
        }
      ]
      // exercises: [
      //   {
      //     first: "Palíndromos",
      //     second: "Minutos-segundos",
      //     third: "Número aleatorio",
      //     fourth: "x",
      //     clickFirst: "showWord",
      //     clickSecond: "showSeconds",
      //     clickThird: "showRandomNumber",
      //     clickFourth: "showRandomNumber"
      //   }
      // ]
    }
  },

  methods: {
    showSeconds() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una cantidad de minutos (por ejemplo, 1578) y se transformarán en segundos.</p>
                        <input id="inp" type="text" placeholder="Introduce una cantidad" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-sky-200 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        let minutos = inp.value;
        let segundos = inp.value * 60;
        respBack("¡Cantidad transformada!", `${minutos} minutos son ${segundos} segundos`, "success", "Aceptar")
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarEntero);
    },

    showWord() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una palabra y te diré si es un palíndromo o no.</p>
                        <p class="text-lg text-white font-bold">Utiliza sólo minúsculas o sólo mayúsculas</p>
                        <input id="inp" type="text" placeholder="Introduce una palabra" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-sky-200 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        this.palinDromo(inp.value);
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarLetras);
    },

    showRandomNumber() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce un número y te daré otro aleatorio entre 1 y tu número elegido.</p>
                        <input id="inp" type="text" placeholder="Introduce un número" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-sky-200 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnRevert = document.querySelector("#btn");
      btnRevert.addEventListener("click", () => {
        this.randomNumber(inp.value);
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarEntero);
    },

    palinDromo(word) {
      let reves = "";
      let res = false;
      for (let i = word.length - 1; i >= 0; i--) {
        reves = reves + word[i];
      }
      if (word == reves) {
        respBack("¡Palíndromo!", `${word} es un palíndromo`, "success", "Aceptar")
        res = true;
      } else {
        respBack("La palabra es muy molona pero...", `${word} no es un palíndromo`, "error", "Insertar otra palabra")
      }
      return res;
    },

    randomNumber(number) {
      let res = Math.floor(Math.random() * number + 1);
      respBack("Y el número es...", `¡¡${res}!!`, "success", "Probar otra vez")
      return res;
    },

    validarEntero(event) {
      const teclaPresionada = event.key;
      const esNumero = /^[0-9]$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esNumero && !esBorrar) {
        event.preventDefault();
      }
    },

    validarLetras(event) {
      const teclaPresionada = event.key;
      const esLetra = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esLetra && !esBorrar) {
        event.preventDefault();
      }
    },

    resetPage() {
      document.querySelector("#content").innerHTML = "";
    }
  }
}
</script>

