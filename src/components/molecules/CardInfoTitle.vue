<template>
    <div>
        <div class="title text-3xl font-bold">
            <h4>{{ title }}</h4>
        </div>
        <div class="sub-title">
            <slot name="subtitle"></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface CardTitleProps {
        title: string
    }
    
    const { title } = defineProps<CardTitleProps>();
</script>
