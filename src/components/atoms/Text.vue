<script setup lang="ts">
    export interface TextProps {
        text: string
    }

    const {text} = defineProps<TextProps>()
</script>

<template>
    <p>{{ text }}</p>
</template>

