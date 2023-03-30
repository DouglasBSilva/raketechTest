import { defineStore } from 'pinia'
import * as api from 'rickmortyapi'
import { Character } from 'rickmortyapi/dist/interfaces';

interface CharacterStoreProperties {
    characters: Character[]
    character?: Character
}

export const useCharactersStore = defineStore("characters", {
    state: (): CharacterStoreProperties =>  ({
        characters: [],
        character: undefined
    }),
    getters: {
      getCharacters: ({ characters }) => characters,
      getCharacter: ({ character }) => character
    },
    actions: {
      async fetchCharacters(page: number) {
        try {
            console.log(this.characters.length, page);
            if(this.characters.length >= page * 12 ) {
                return;
            }

            const response = await api.getCharacters({
                page,
            })

            this.characters = [...this.characters, ...(response.data.results || [])]
          }
        catch (error) {
            alert(error)
            console.log(error)
        }
      },
      async fetchCharacter(id: number) {
        try {
            let character = this.characters.find((character) => character.id === id);
            
            if(character != null) {
                this.character = character;
                return;
            }

            const response = await api.getCharacter(id);
            this.character = response.data
          }
        catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})