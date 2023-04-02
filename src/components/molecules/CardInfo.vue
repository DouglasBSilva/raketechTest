<template>
    <div class="text-black dark:text-white">
        <div class="label opacity-50">
            {{ label }}
        </div>
        <div class="info">
            <a class="cursor-pointer hover:underline decoration-solid" @click="$emit( 'click' )">
                {{ info }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
    export interface CardInfoProps {
        label: string
        info: string
    }
    
    const { label, info } = defineProps<CardInfoProps>();
    defineEmits(['click'])
</script>
