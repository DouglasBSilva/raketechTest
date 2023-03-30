<script setup lang="ts">
    export interface LabelProps {
        text: string
    }

    const {text} = defineProps<LabelProps>()
</script>

<template>
    <label>{{ text }}</label>
</template>

