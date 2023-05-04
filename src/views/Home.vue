<template>
  <div class="bg-[url('/./assets/img/bg1.jpg')] w-full min-h-screen bg-cover bg-bottom m-0 p-0">
    <div class="flex justify-center items-center gap-20">
      <div class="card w-96 flex justify-center my-20">
        <figure><img src="/./assets/img/facil.png" alt="Nivel fácil" /></figure>
        <div
          class="card-body justify-center items-center gap-4 bg-gradient-to-b from-blue-900 to-violet-400 rounded-b-xl">
          <h2 class="card-title text-white">Nivel fácil</h2>
          <div class="card-actions justify-center">
            <router-link to="/basics"><button
                class="btn bg-blue-900 border-white hover:bg-violet-400 hover:border-black hover:text-black">Ejercicios</button></router-link>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center">
        <div class="card w-96 glass flex justify-center my-20">
          <figure><img src="/./assets/img/medio.png" alt="Nivel medio" /></figure>
          <div
            class="card-body justify-center items-center gap-4 bg-gradient-to-b from-purple-900 to-red-800 rounded-b-xl">
            <h2 class="card-title text-white">Nivel intermedio</h2>
            <div class="card-actions justify-center">
              <router-link to="/medium"><button
                  class="btn bg-rose-800 border-white hover:bg-rose-400 hover:border-black hover:text-black">Ejercicios</button></router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style>
</style>
