<template>
    <div class="grid gap-4 grid-cols-2">
        <button class="bg-black" :disabled="isFirstPage" @click="$emit('changePage', page - 1)">PREVIOUS PAGE</button>
        <button class="bg-black" @click="$emit('changePage', page + 1)">NEXT PAGE</button>
    </div>
</template>

<script setup lang="ts">
    import { PageInformation } from '$types/PageInformation';
    import { computed } from 'vue';

    interface PaginatorProps {
        page: number
        info?: PageInformation
    }
    
    const {page, info} = defineProps<PaginatorProps>()

    const isFirstPage = computed(() => info?.prev == null)
    defineEmits(['changePage'])
</script>

<style scoped>

</style>