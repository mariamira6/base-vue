<template>
  <div class="card w-80 animate-fade animate-duration-1000 animate-ease-in">
    <figure><img class="w-full h-72" :src="img" alt="Nivel fácil" /></figure>
    <div :class="property">
      <h2 class="card-title text-white">{{ name }}</h2>
      <div class="card-actions justify-center">
        <router-link :to="url"><button :class="btn">Ejercicios</button></router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    name: { type: String },
    img: { type: String },
    property: { type: String },
    btn: { type: String },
    url: { type: String }
  }
}
</script>
