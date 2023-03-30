<template>
    <div v-if="character">
        <CardContainer>
            <div class="grid grid-cols-3 gap-4 h-full grid-flow-col">
                <div class="col-span-1 h-full flex CardImageContainer rounded-l-lg">
                    <CardImage :image="character.image"/>
                </div>
                <div class="col-span-2 gap-4 grid content-center CardInfoContainer">
                    <CardInfoTitle :title="character.name">
                        <template #subtitle>

                        </template>
                    </CardInfoTitle>
                    <CardInfo label="Last known location:" :info="character.location.name" :id="character.id"></CardInfo>
                    <CardInfo label="First seen in:" :info="character.origin.name" :id="character.id"></CardInfo>
                </div>
            </div>
        </CardContainer>
    </div>
</template>

<script setup lang="ts">
 import CardInfoTitle from '$components/molecules/CardInfoTitle.vue'
 import CardInfo from '$components/molecules/CardInfo.vue'
 import CardImage from '$components/molecules/CardImage.vue';
 import CardContainer from '$components/molecules/CardContainer.vue';
 import { Character } from 'rickmortyapi/dist/interfaces';

 interface CharacterCardProps {
    character: Character
 }

 const {character} = defineProps<CharacterCardProps>()

</script>

<style scoped>
    
</style>