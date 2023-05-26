<template>
  <div class="card w-40 md:w-64 lg:w-80 animate-fade animate-duration-1000 animate-ease-in">
    <figure><img class="hidden md:block lg:block md:w-full md:h-72 lg:w-full lg:h-72" :src="img" alt="Nivel fácil" />
    </figure>
    <div :class="property">
      <h2 class="card-title text-white text-center">{{ name }}</h2>
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
