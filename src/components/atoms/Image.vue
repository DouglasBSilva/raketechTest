<script setup lang="ts">
    export interface ImageProps {
        image: string
    }

    const {image} = defineProps<ImageProps>()
</script>

<template>
    <image/>
</template>

