<template>
  <body class="bg-[url('/./assets/img/bg13.jpg')] bg-cover w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center mt-5">
      <div class="dropdown dropdown-hover">
        <label tabindex="0" class="btn bg-sky-500 text-white hover:bg-sky-800 m-1">Elige uno de los ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-sky-500 text-white rounded-box w-64">
          <li><span @click="showWord" class="hover:bg-sky-800">Palíndromos</span></li>
          <li><span @click="showSeconds" class="hover:bg-sky-800">Minutos-segundos</span></li>
          <li><span @click="showRandomNumber" class="hover:bg-sky-800">Número aleatorio</span></li>
          <li><span @click="convertTemp" class="hover:bg-sky-800">Convertir temperatura</span></li>
          <li><span @click="showNumbers" class="hover:bg-sky-800">Mayor-menor</span></li>
          <li><span @click="howMany" class="hover:bg-sky-800">Vocales-consonantes (Básico)</span></li>
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

    convertTemp() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce un número e indica si quieres transformarlo de ºC  a Fahrenheit o viceversa.</p>
                        <input id="inp" type="text" placeholder="Introduce un número" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="celsius" class="bg-sky-200 rounded-lg p-2 text-black">Transformar a ºC</button>
                        <button id="fahrenheit" class="bg-sky-200 rounded-lg p-2 text-black">Transformar a ºF</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnC = document.querySelector("#celsius");
      btnC.addEventListener("click", () => {
        this.toCelsius(inp.value)
      });

      const btnF = document.querySelector("#fahrenheit")
      btnF.addEventListener("click", () => {
        this.toFahrenheit(inp.value)
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarNums);
    },

    showNumbers() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una serie de números y te diré cuál es el menor y el mayor.</p>
                        <input id="inp" type="text" placeholder="Introduce una serie de números" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-sky-200 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        this.returnNumbers(inp.value)
      });
    },

    howMany() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una palabra o frase para saber cuántas vocales y consonantes tiene.</p>
                        <p class="text-lg text-white font-bold">Utiliza sólo letras sin caracteres especiales (tildes, signos, etc.)</p>
                        <input id="inp" type="text" placeholder="Introduce una palabra" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-sky-200 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        this.letsCount(inp.value);
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarLetras);
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

    toFahrenheit(num) {
      let finalTemp = (num * 9 / 5) + 32 + "ºF";
      respBack("¡Temperatura transformada!", `${num} ºC = ${finalTemp}`, "success", "Aceptar")
      return finalTemp;
    },

    toCelsius(num) {
      let finalTemp = (num - 32) * 5 / 9 + "ºC";
      respBack("¡Temperatura transformada!", `${num} ºF = ${finalTemp}`, "success", "Aceptar")
      return finalTemp;
    },

    returnNumbers(num) {
      let numFinal = num.split(",").map(n => n.trim());
      let max = numFinal[0];
      let min = numFinal[0];
      for (let i = 0; i < numFinal.length; i++) {
        if (max < numFinal[i]) {
          max = numFinal[i];
        }
        if (min > numFinal[i]) {
          min = numFinal[i];
        }
      }
      respBack(`Has introducido ${num} y...`, `¡Tachán! ${min} es el número más pequeño y ${max} el más grande`, "success", "Aceptar")
      return { max, min };
    },

    letsCount(phrase) {
      let aux = phrase.toLowerCase();
      let vocals = 0;
      let consonants = 0;
      for (let j = 0; j < aux.length; j++) {
        if (aux[j] == "a" || aux[j] == "e" || aux[j] == "i" || aux[j] == "o" || aux[j] == "u") {
          vocals = vocals + 1;
        } else {
          if (aux[j] !== " ") {
            consonants = consonants + 1;
          }
        }
      }
      respBack(`"${phrase}" tiene...`, `Vocales: ${vocals}. Consonantes: ${consonants}.`, "success", "Aceptar")
      return { vocals, consonants }
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

    validarNums(event) {
      const teclaPresionada = event.key;
      const esNum = /^\d+(\.\d+)?$/.test(teclaPresionada) || /^\d+(\,\d+)?$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esNum && !esBorrar) {
        if (!esNum && !esBorrar) {
          event.preventDefault();
        }
      }
    },

    resetPage() {
      document.querySelector("#content").innerHTML = "";
    }
  }
}
</script>

