<template>
    <img class="card-image" :src="image">
</template>

<script setup lang="ts">
    export interface ImageProps {
        image: string
    }

    const {image} = defineProps<ImageProps>()
</script>

<style lang="scss" scoped>
    .card-image {
        border-radius: inherit
    }
</style>