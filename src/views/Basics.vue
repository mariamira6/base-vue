<template>
  <div class="bg-[url('/./assets/img/text1.jpg')] w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center">
      <div class="dropdown dropdown-hover mt-5">
        <label tabindex="0" class="btn bg-sky-500 text-white hover:bg-sky-800 m-1">Elige uno de los ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-sky-500 text-white rounded-box w-52">
          <li><span class="hover:bg-sky-800">Palíndromos</span></li>
          <li><span class="hover:bg-sky-800">Minutos-segundos</span></li>
          <li><span class="hover:bg-sky-800">Al revés</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from "../components/Breadcrumbs.vue"
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
}
</script>

<style>
</style>
