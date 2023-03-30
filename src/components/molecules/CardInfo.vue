<template>
    <div>
        <div class="label opacity-50">
            {{ label }}
        </div>
        <div class="info">
            {{ info }}
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface CardInfoProps {
        label: string
        info: string
        id: number
    }
    
    const { label, info, id } = defineProps<CardInfoProps>();
</script>
