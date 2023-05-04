import respBack from "./utils.js"

export default function showContent() {
  const $select = document.querySelector('#content');
  const $div = document.createElement('div');
  $div.innerHTML = `<div class="flex flex-col justify-center items-center my-20 gap-6">
                    <p class="text-xl text-white font-bold">Introduce una cantidad de minutos (por ejemplo, 1578) y se transformarán en segundos.</p>
                    <input id="nums" type="text" placeholder="Introduce una cantidad" class="input input-bordered input-info w-full max-w-xs" />
                    <div class="flex flex-row gap-2">
                    <button id="btn" class="bg-white text-black">Aceptar</button>
                    <button id="reset" class="bg-white text-black">Vaciar página</button>
                    </div>
                      </div>`
  $select.appendChild($div);
  const btnShow = document.querySelector("#btn");
  btnShow.addEventListener("click", () => {
    let minutos = nums.value;
    let segundos = nums.value * 60;
    respBack("¡Cantidad transformada!", `${minutos} minutos son ${segundos} segundos`, "success", "Aceptar")
  });
  const btnReset = document.querySelector("#reset");
  btnReset.addEventListener("click", () => {
    document.querySelector("#content").innerHTML = "";
  }, false)
}
