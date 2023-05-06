<template>
  <div class="bg-[url('/./assets/img/bg1.jpg')] w-full min-h-screen bg-cover bg-bottom m-0 p-0">
    <div class="flex justify-center items-center gap-20">
      <Card v-for="item in level" :key="item" :name="item.name" :img="item.img" :property="item.property" :btn="item.btn"
        :url="item.url" />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
  name: "Home",
  components: { Card },
  data() {
    return {
      level: [
        {
          name: "Nivel básico",
          img: "/./assets/img/facil.png",
          property: "card-body justify-center items-center gap-4 bg-gradient-to-b from-blue-900 to-violet-400 rounded-b-xl",
          btn: "btn bg-blue-900 border-white hover:bg-violet-400 hover:border-black hover:text-black",
          url: "/basics"
        },
        {
          name: "Nivel intermedio",
          img: "/./assets/img/medio.png",
          property: "card-body justify-center items-center gap-4 bg-gradient-to-b from-red-900 to-rose-400 rounded-b-xl",
          btn: "btn bg-red-900 border-white hover:bg-rose-400 hover:border-black hover:text-black",
          url: "/medium"
        }
      ]

    }
  }
}
</script>

<style>
</style>
