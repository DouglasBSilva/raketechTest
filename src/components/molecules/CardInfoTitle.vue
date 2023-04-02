<template>
    <div class="text-black dark:text-white">
        <div class="title text-3xl font-bold">
            <a class="hover:underline decoration-solid cursor-pointer"  @click="$emit( 'click' )">
                <h4>{{ title }}</h4>
            </a>
        </div>
        <div class="sub-title flex items-center capitalize">
            <span 
            :class="{
                'bg-red-400': status == 'Dead',
                'bg-green-400': status == 'Alive',
                'bg-gray-400':  status == 'unknown'
            }"
            class="w-2 h-2 rounded-full mr-2"></span> <b>{{ status }} - {{ specie }}</b>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CharacterStatus } from '$types/CharacterStatus';

    export interface CardTitleProps {
        title: string,
        specie: string,
        status: CharacterStatus
    }

    const { title } = defineProps<CardTitleProps>();

    defineEmits(['click'])
</script>