<template>
  <div class="text-sm breadcrumbs text-white ml-5 font-bold">
    <ul class="flex flex-row items-center gap-2">
      <router-link to="/">
        <li><span :class="hover">Home</span></li>
      </router-link>
      <img src="/./assets/icons/breadcrumbs.256x221.png" alt="Breadcrumb icon" class="w-3 h-2">
      <li><span>{{ name }}</span></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Breadcrumbs",
  props: {
    name: { type: String },
    hover: { type: String }
  }
}
</script>
