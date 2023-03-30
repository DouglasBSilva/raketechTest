<template>
    <div>
        <div class="grid gap-4">
            <button class="bg-black" @click="$event => characterStore.fetchCharacters(++page)">NEXT PAGE</button>
            <button class="bg-black" @click="$event => characterStore.fetchCharacters(--page)">PREVIOUS PAGE</button>
        </div>
        <div class="grid grid-cols-2 gap-4">
            <CharacterCard :key="key" v-for="(character, key) in characters" :character="character"/>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CharacterCard from '$components/organisms/CharacterCard.vue';
    import { useCharactersStore } from '$store/characters';
    import { ref, computed } from 'vue';

    const characterStore = useCharactersStore();
    const page = ref(1);
    characterStore.fetchCharacters(page.value);
    const characters = computed(() => characterStore.characters.slice((page.value - 1) * 12, page.value * 12)); 
</script>