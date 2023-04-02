<template>
    <div class="h-12 dark:bg-gray-500 mb-4 bg-white flex contents-center justify-end px-2">
        <label class="mx-2" for="">Dark Mode</label>
        <input v-model="isDark" type="checkbox" name="" id="" @click="setDarkModel(!isDark)">
    </div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);
function setDarkModel(isActive: boolean) {
    window.localStorage.setItem('darkMode', isActive ? '0': '1');
    toggleDark(isActive);
}

</script>
<style scoped>

</style>