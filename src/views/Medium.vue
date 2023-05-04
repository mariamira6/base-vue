<template>
  <div class="bg-[url('/./assets/img/bg8.jpg')] w-full min-h-screen m-0 p-0">
    <Breadcrumbs v-for="item in bc" :key="item" :name="item.name" :hover="item.hover" />
    <Dropdown v-for="item in exercises" :key="item" :first="item.first" :second="item.second" :third="item.third"
      :fourth="item.fourth" />
  </div>
</template>

<script>
import Breadcrumbs from '../components/Breadcrumbs.vue'
import Dropdown from '../components/Dropdown.vue'
export default {
  name: "Medium",
  components: { Breadcrumbs, Dropdown },
  data() {
    return {
      bc: [
        {
          name: "Nivel intermedio",
          hover: "hover:text-green-300"
        }
      ],
      exercises: [
        {
          first: "hola",
          second: "quetal",
          third: "bien",
          fourth: "gracias"
        }
      ]
    }
  }
}
</script>

<style>
</style>
