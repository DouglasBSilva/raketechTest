<script setup lang="ts">
</script>

<template>
  <RouterView class="dark:bg-black" v-slot="{ Component }">
     <Suspense>
      <component :is="Component" />
    </Suspense>
  </RouterView>
</template>