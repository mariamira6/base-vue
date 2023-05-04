<template>
  <div class="flex justify-center items-center">
    <div class="dropdown dropdown-hover mt-5">
      <label tabindex="0" class="btn bg-emerald-500 text-white hover:bg-emerald-800 hover:text-white m-1">Elige uno de
        los
        ejercicios</label>
      <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-emerald-500 text-white rounded-box w-52">
        <li><span :@click="click" class="hover:bg-emerald-800">{{ first }}</span></li>
        <li><span :@click="click" class="hover:bg-emerald-800">{{ second }}</span></li>
        <li><span :@click="click" class="hover:bg-emerald-800">{{ third }}</span></li>
        <li><span :@click="click" class="hover:bg-emerald-800">{{ fourth }}</span></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",
  props: {
    first: { type: String },
    second: { type: String },
    third: { type: String },
    fourth: { type: String },
    click: { type: String }
  }
}
</script>
