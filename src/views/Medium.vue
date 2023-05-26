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
          <li><span @click="changeColor" class="hover:bg-red-800">Colores</span></li>
          <li><span @click="convertBase" class="hover:bg-red-800">Base binaria-decimal</span></li>
          <li><span @click="numCharacters" class="hover:bg-red-800">Vocales-consonantes (Avanzado)</span></li>
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
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce el número de dados que quieres lanzar y de cuántas caras quieres que sean, y te diré el resultado de tu tirada.</p>
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-lg lg:text-lg">Ejemplo: Quiero tirar 2 dados de 12 caras.</p>
                        <div class="flex flex-row gap-6">
                        <input id="dados" type="text" placeholder="Cantidad de dados" class="input input-bordered border-red-500 input-info w-40 max-w-xs" />
                        <input id="caras" type="text" placeholder="Número de caras" class="input input-bordered border-red-500 input-info w-40 max-w-xs" />
                        </div>
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black hover:animate-jump">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        if (caras.value.trim() == "" || dados.value.trim() == "") {
          respBack("Error", "Hay algún campo vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.throwDice(caras.value, dados.value);
          respBack("Lanzando los dados...", `Tirada: ${res}`, "success", "Aceptar", "#7d121261", "#840d0d")
        }
      });

      const inputCaras = document.querySelector('#caras');
      inputCaras.addEventListener("keydown", this.validarEntero);
      const inputDados = document.querySelector('#dados');
      inputDados.addEventListener("keydown", this.validarEntero);
    },

    listNumbers() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce un número para que te diga los primeros números primos.</p>
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-lg lg:text-lg">Ejemplo: Si introduces un 5, te diré los 5 primeros números primos.</p>
                        <input id="inp" type="text" placeholder="Introduce un número" class="input input-bordered border-red-500 input-info w-48 max-w-xs" />
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black hover:animate-jump">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnShow = document.querySelector("#btn");
      btnShow.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.numPrimos(inp.value);
          respBack(`Los ${inp.value} primeros números primos son:`, `${res}`, "success", "Aceptar", "#7d121261", "#840d0d")
        }
      });

      const input = document.querySelector('#inp');
      input.addEventListener("keydown", this.validarEntero);
    },

    orderNums() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce una serie de números para ordenarlos de menor a mayor.</p>
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-lg lg:text-lg">Ejemplo: 3, 124, -34, 67, 4.</p>
                        <input id="inp" type="text" placeholder="Inserta números separados por comas" class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black hover:animate-jump">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnOrd = document.querySelector("#btn");
      btnOrd.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.putFirst(inp.value);
          respBack(`Ordenando los números ${inp.value}...`, `${res}`, "success", "Aceptar", "#7d121261", "#840d0d")
        }
      });
    },

    changeColor() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce un número del 0 al 255 por cada cantidad de RGB que quieras para cambiar el color de fondo y ventana modal.</p>
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-lg lg:text-lg">Ejemplo: R (rojo) = 253; G (verde) = 53; B (azul) = 156. </p>
                        <div class="flex flex-row gap-6">
                        <input id="red" type="text" placeholder="Rojo" class="input input-bordered border-red-500 input-info w-24 max-w-xs" />
                        <input id="green" type="text" placeholder="Verde" class="input input-bordered border-red-500 input-info w-24 max-w-xs" />
                        <input id="blue" type="text" placeholder="Azul" class="input input-bordered border-red-500 input-info w-24 max-w-xs" />
                        </div>
                        <div class="flex flex-row gap-2">
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black hover:animate-jump">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnColor = document.querySelector("#btn");
      btnColor.addEventListener("click", () => {
        if (red.value.trim() == "" || green.value.trim() || blue.value.trim()) {
          respBack("Error", "Hay algún campo vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        }

        if (red.value >= 0 && red.value <= 255 && green.value >= 0 && green.value <= 255 && blue.value >= 0 && blue.value <= 255) {
          let res = this.chooseColor(red.value, green.value, blue.value);
          respBack("Color cambiado", `El color elegido ha sido ${res}`, "success", "Aceptar", `${res}`, `${res}`)
        } else {
          respBack("Número erróneo", "Tiene que ser un número entre el 0 y el 255", "error", "Aceptar", "#7d121261", "#840d0d")
        }
      });

      const inputRed = document.querySelector('#red'); {
        inputRed.addEventListener("keydown", this.validarEntero);
      }
      const inputGreen = document.querySelector('#red'); {
        inputGreen.addEventListener("keydown", this.validarEntero);
      }
      const inputBlue = document.querySelector('#red'); {
        inputBlue.addEventListener("keydown", this.validarEntero);
      }
    },

    numCharacters() {
      this.resetPage();
      const $select = document.querySelector('#content');

      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce una palabra o frase y te diré qué caracteres tiene y su cantidad.</p>
                        <input id="inp" type="text" placeholder="Inserta palabra o frase" class="input input-bordered border-red-500 input-info w-full max-w-xs" />
                        <button id="btn" class="bg-red-300 rounded-lg p-2 text-black hover:animate-jump">Aceptar</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnCharacter = document.querySelector("#btn");
      btnCharacter.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.countCharacters(inp.value);
          respBack(`Tu palabra/frase "${inp.value}" tiene...`, `${res}`, "success", "Aceptar", "#7d121261", "#840d0d")
        }
      });
    },

    convertBase() {
      this.resetPage();
      const $select = document.querySelector('#content');
      const $div = document.createElement('div');
      $div.innerHTML = `<div class="flex flex-col justify-center items-center mx-12 my-20 gap-6 animate-fade duration-1000 animate-ease-linear">
                        <p class="text-white font-bold text-center text-s sm:text-s md:text-xl lg:text-xl">Introduce un número e indica si quieres convertirlo de base binaria a decimal o viceversa.</p>
                        <input id="inp" type="text" placeholder="Introduce un número" class="input input-bordered input-info w-48 max-w-xs" />
                        <div class="flex flex-row gap-2">
                        <button id="binaria" class="bg-sky-200 rounded-lg p-2 text-black hover:animate-jump">Convertir a Base Binaria</button>
                        <button id="decimal" class="bg-sky-200 rounded-lg p-2 text-black hover:animate-jump">Convertir a Base Decimal</button>
                        </div>
                          </div>`
      $select.appendChild($div);
      const btnB = document.querySelector("#binaria");
      btnB.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.decToBin(inp.value, 2);
          respBack(`${inp.value} en base binaria es...`, `${res} base 2`, "success", "Aceptar", "#7d121261", "#840d0d")
        }
      });

      const btnD = document.querySelector("#decimal")
      btnD.addEventListener("click", () => {
        if (inp.value.trim() == "") {
          respBack("Error", "El campo está vacío. Introduce los datos.", "error", "Aceptar", "#7d121261", "#840d0d")
        } else {
          let res = this.binToDec(inp.value, 2)
          respBack(`${inp.value} en base decimal es...`, `${res} base 10`, "success", "Aceptar", "#7d121261", "#840d0d")
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

    binToDec(num, base) {
      let number = num.toString();
      number = (number.split(''));
      let res = 0;
      for (let i = number.length - 1; i >= 0; i--) {
        res = res + (number[i] * (base ** ((number.length - 1) - i)))
      }
      return res
    },

    decToBin(num, base) {
      let res = [];
      while (num >= base) {
        res.push(num % base);
        num = parseInt((num) / (base));
      }
      res.push(num);
      res.reverse()
      return res.join('');
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

    chooseColor(R, G, B) {
      return `rgb(${R}, ${G}, ${B})`
    },

    countCharacters(text) {
      let obj = [];
      for (let i = 0; i < text.length; i++) {
        let aux = false;
        for (let j = 0; j < obj.length; j++) {
          if (obj[j].character == text[i]) {
            obj[j].quantity++;
            aux = true;
          }
        }
        if (aux == false) {
          obj.push({
            character: `${text[i]}`,
            quantity: 1
          })
        }
      }
      let res = "";
      for (let k = 0; k < obj.length; k++) {
        res += `"${obj[k].character}" = ${obj[k].quantity}`
      }
      res = res.substring(0, res.length - 2);
      return res
    },

    validarLetras(event) {
      const teclaPresionada = event.key;
      const esLetra = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esLetra && !esBorrar) {
        event.preventDefault();
      }
    },

    validarEntero(event) {
      const teclaPresionada = event.key;
      const esNumero = /^[0-9]$/.test(teclaPresionada);
      const esBorrar = (teclaPresionada === 'Backspace') || (teclaPresionada === 'Delete');

      if (!esNumero && !esBorrar) {
        event.preventDefault();
      }
    },


    resetPage() {
      document.querySelector("#content").innerHTML = "";
    }
  }
}
</script>
