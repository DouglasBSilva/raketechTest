<template>
    <div v-if="characterStore.character">
        <CharacterCard :character="characterStore.character"/>
        <h3 class="text-2xl text-gray-950 text-center">Episodes</h3>
        <div class="boder-solid grid grid-cols-4 gap-4 my-2">
            <CardContainer class="p-4 text-black dark:text-white" :key="key" v-for="({episode, name, url}, key) in (episodeStore.episodes || [])">
                <a :href="url">{{episode}} - {{ name }}</a>
            </CardContainer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import CharacterCard from '$components/organisms/CharacterCard.vue';
    import CardContainer from '$components/molecules/CardContainer.vue';
    
    import { useCharactersStore } from '$store/characters';
    import { useEpisodesStore } from '$store/episodes';
    import { useRoute } from 'vue-router'

    const route = useRoute()
    let characterStore = useCharactersStore()
    let episodeStore = useEpisodesStore()
    characterStore.fetchCharacter(parseInt(route.params.id)).then(
        (character) => episodeStore.fetchEpisodesByIds(
            character?.episode.map(
                (characterEpisode) => parseInt(characterEpisode.replace(/.*?([0-9]+)$/gm, '$1'))
            ) || []
        )
    );
    
</script>