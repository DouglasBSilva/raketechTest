<template>
    <div>
        <Filter @applyFilter="goToPage(1, $event)"/>
        <div class="flex justify-center p-4">
            <div class="w-5/6 grid grid-cols-2 gap-4">
                <CharacterCard 
                    @first-seem-click="seeDetails(character)"
                    @last-location-click="seeDetails(character)"
                    @name-click="seeDetails(character)"
                    :key="((page - 1) * 12) + key" 
                    v-for="(character, key) in characters"
                    :character="character"/>
            </div>    
        </div>
        <Paginator :page="page" :info="characterStore.page?.info" @changePage="goToPage($event, characterStore.currentFilter)"/>
    </div>
</template>

<script setup lang="ts">
    import CharacterCard from '$components/organisms/CharacterCard.vue';
    import Filter from '$components/organisms/Filter.vue';
    import Paginator from '$components/organisms/Paginator.vue';
    import { CharacterPropertyFilter, useCharactersStore } from '$store/characters';
    import { ref, computed } from 'vue';
    import { useRouter, useRoute } from 'vue-router'
    import { pickBy, identity } from 'lodash'
    import { Character } from 'rickmortyapi';

    const router = useRouter()
    const route = useRoute()
    const characterStore = useCharactersStore()
    const page = ref(1)
    const characters = computed(() => characterStore.characters.slice((page.value - 1) * 12, page.value * 12))
    
    function goToPage(targetPage: number, filter: CharacterPropertyFilter = {}) {
        if(
            (targetPage > page.value && characterStore.page?.info?.next != null) ||
            targetPage > 0
        ) {
            page.value = targetPage
            pickBy(filter, identity)
            router.replace({ 
                path: route.path,
                query: {...filter, page: targetPage} 
            })
            characterStore.fetchCharacters(targetPage, filter)
        }
    }

    function seeDetails(character: Character) {
        router.push({ name: 'hero', params: { id: character.id } });
    }

    goToPage(page.value, route.query);
    
</script>