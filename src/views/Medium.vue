<template>
  <div class="bg-[url('/./assets/img/text2.jpg')] w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <div class="flex justify-center items-center">
      <div class="dropdown dropdown-hover mt-5">
        <label tabindex="0" class="btn bg-emerald-500 text-white hover:bg-emerald-800 hover:text-white m-1">Elige uno de
          los
          ejercicios</label>
        <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-emerald-500 text-white rounded-box w-52">
          <li><span class="hover:bg-emerald-800">Blabla</span></li>
          <li><span class="hover:bg-emerald-800">Bloblo</span></li>
          <li><span class="hover:bg-emerald-800">Blibli</span></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
export default {
  name: "Medium",
  components: { Breadcrumbs },
  data() {
    return {
      bc: [
        {
          name: "Nivel intermedio",
          hover: "hover:text-green-300"
        }
      ]
    }
  }
}
</script>

<style>
</style>
