<template>
  <div class="bg-[url('/./assets/img/bg12.jpg')] w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center mt-5">
      <div class="dropdown dropdown-hover">
        <label tabindex="0" class="btn bg-red-700 text-white hover:bg-red-800 m-1">Elige uno de los ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-red-700 text-white rounded-box w-64">
          <li><span @click="takeDice" class="hover:bg-red-800">Dados</span></li>
          <li><span @click="listNumbers" class="hover:bg-red-800">Números primos</span></li>
          <li><span @click="orderNums" class="hover:bg-red-800">Ordenar un vector</span></li>
          <li><span class="hover:bg-red-800">Colores</span></li>
          <li><span @click="convertBase" class="hover:bg-red-800">Base binaria</span></li>
          <li><span @click="allLetters" class="hover:bg-red-800">Vocales-consonantes (Avanzado)</span></li>
        </ul>
      </div>
    </div>
    <div id="content"></div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import respBack from '../utils.js'

export default {
  name: "Medium",
  components: { Breadcrumbs },
  data() {
    return {
      bc: [
        {
          name: "Nivel intermedio",
          hover: "hover:text-red-300"
        }
      ]
    }
  },
  methods: {

    takeDice() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce el número de dados que quieres lanzar y de cuántas caras quieres que sean, y te diré el resultado de tu tirada.</p>
                        <p class="text-lg text-white font-bold">Ejemplo: Quiero tirar 2 dados de 12 caras.</p>
                        <input id="dados" type="text" placeholder="Introduce cuántos dados quieres lanzar" class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <input id="caras" type="text" placeholder="Introduce el número de caras" class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        if (caras.value.trim() == "" || dados.value.trim() == "") {
          respBack("Error", "Hay algún campo vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.throwDice(caras.value, dados.value);
          respBack("Lanzando los dados...", `Tirada: ${res}`, "success", "Aceptar")
        }
      });

      const input = document.querySelector('#caras', '#dados');
      input.addEventListener("keydown", this.validarEntero);
    },

    allLetters() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una palabra o frase para saber cuántas vocales y consonantes tiene.</p>
                        <p class="text-lg text-white font-bold">Puedes utilizar todos los caracteres, incluidos los especiales.</p>
                        <input id="inp" type="text" placeholder="Introduce una palabra o frase" class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.numLetters(inp.value);
          respBack(`"${inp.value}" tiene...`, `Vocales: ${res.vocals}. Consonantes: ${res.consonants}.`, "success", "Aceptar")
        }
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarLetras);
    },

    listNumbers() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce un número para que te diga los primeros números primos.</p>
                        <p class="text-lg text-white font-bold">Ejemplo: Si introduces un 5, te diré los 5 primeros números primos.</p>
                        <input id="inp" type="text" placeholder="Introduce un número." class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.numPrimos(inp.value);
          respBack(`Los ${inp.value} primeros números primos son:`, `${res}`, "success", "Aceptar")
        }
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarEntero);
    },

    orderNums() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce una serie de números para ordenarlos de menor a mayor.</p>
                        <p class="text-lg text-white font-bold">Ejemplo: 3, 124, -34, 67, 4.</p>
                        <input id="inp" type="text" placeholder="Introduce varios números separados por comas." class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnOrd = document.querySelector("#btn");
      btnOrd.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.putFirst(inp.value);
          respBack(`Ordenando los números ${inp.value}...`, `${res}`, "success", "Aceptar")
        }
      });


    },

    convertBase() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                        <p class="text-xl text-white font-bold">Introduce un número e indica si quieres convertirlo de base binaria a decimal o viceversa.</p>
                        <input id="inp" type="text" placeholder="Introduce un número" class="input input-bordered input-info w-full max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="binaria" class="bg-sky-200 rounded-lg p-2 text-black">Convertir a Base Binaria</button>
                        <button id="decimal" class="bg-sky-200 rounded-lg p-2 text-black">Convertir a Base Decimal</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnB = document.querySelector("#binaria");
      btnB.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.binToDec(inp.value); //cambiarlo
          respBack(`${inp.value} en base binaria es...`, `${res} base 2`, "success", "Aceptar")
        }
      });

      const btnD = document.querySelector("#decimal")
      btnD.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar")
        } else {
          let res = this.binToDec(inp.value)
          respBack(`${inp.value} en base decimal es...`, `${res} base 10`, "success", "Aceptar")
        }
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarNums);
    },

    numPrimos(num) {
      let primos = [];
      let number = 1;
      while (primos.length < num) {
        let isPrimo = true;
        for (let i = 2; i < number; i++) {
          if (number % i == 0) {
            isPrimo = false;
          }
        }

        if (isPrimo == true) {
          primos.push(number);
        }
        number++;
      }
      return primos;
    },

    numLetters(text) {
      let aux = text.toLowerCase();
      let vocals = 0;
      let consonants = 0;
      for (let i = 0; i < aux.length; i++) {
        if (aux[i] >= "a" && aux[i] <= "z") {
          if (aux[i] == "a" || aux[i] == "e" || aux[i] == "i" || aux[i] == "o" || aux[i] == "u") {
            vocals = vocals + 1;
          } else {
            consonants = consonants + 1;
          }
        }
        if (aux[i] == "á" || aux[i] == "é" || aux[i] == "í" || aux[i] == "ó" || aux[i] == "ú") {
          vocals = vocals + 1;
        }
      }
      return { vocals, consonants };
    },
    validarEntero(event) {
      const teclaPresionada = event.key;
      const esNumero = /^[0-9]$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esNumero && !esBorrar) {
        event.preventDefault();
      }
    },

    throwDice(caras, dados) {
      let tirada = [];
      for (let i = 0; i < dados; i++) {
        let res = Math.floor(Math.random() * caras) + 1;
        tirada.push(res);
      }
      return tirada;
    },

    binToDec(num) {
      let number = num.toString();
      number = (number.split(''));
      let res = 0;
      for (let i = 0; i < number.length; i++) {
        res = res + (number[i] * (2 ** (number.length - i)))
      }
      return res;
    },

    putFirst(numbers) {
      let splitNumbers = numbers.split(",").map(Number);
      for (let i = 0; i < splitNumbers.length; i++) {
        for (let j = 0; j < splitNumbers.length - 1; j++) {
          if (splitNumbers[j] > splitNumbers[j + 1]) {
            let aux = splitNumbers[j];
            splitNumbers[j] = splitNumbers[j + 1];
            splitNumbers[j + 1] = aux;
          }
        }

      }
      return splitNumbers
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
