<template>
    <div class="filter border-black p-5 dark:text-white text-black bg-white border dark:bg-gray-500 gap-4 grid grid-cols-6">
        <input placeholder="Name" v-model="filter.name" type="text" name="name">
        <select placeholder="Status" v-model="filter.status" name="status" id="status">
            <option :value="undefined">All</option>
            <option :key="index" v-for="(status, index) in characterStatus" :value="status">{{status}}</option>
        </select>
        <select placeholder="Gender" v-model="filter.gender" name="gender" id="gender">
            <option :value="undefined">All</option>
            <option :key="index" v-for="(gender, index) in characterGender" :value="gender">{{gender}}</option>
        </select>
        <input placeholder="Species" v-model="filter.species" type="text" name="species">
        <input placeholder="Type" v-model="filter.type" type="text" name="type">
        <button @click="$emit('applyFilter', filter)">Filter</button>
    </div>
</template>

<script setup lang="ts">
    import { computed, ref} from "vue";
    import { CharacterGenderEnum } from "$types/CharacterGender";
    import { CharacterStatusEnum } from "$types/CharacterStatus";
    import { CharacterPropertyFilter } from "$store/characters";

    const emit = defineEmits(['applyFilter'])

    const filter = ref<CharacterPropertyFilter>({});
    const characterStatus = computed(() => Object.keys(CharacterStatusEnum))
    const characterGender = computed(() => Object.keys(CharacterGenderEnum))

</script>

<style scoped>
 * {
    color: black;
    text-transform: capitalize;
 }
</style>