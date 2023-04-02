import { defineStore } from 'pinia'
import * as api from 'rickmortyapi'
import { Character, Info, CharacterFilter } from 'rickmortyapi'


export interface CharacterPropertyFilter extends Pick<CharacterFilter, 'gender'|'name'|'species'|'status'|'type'> {}

interface CharacterStoreProperties {
    characters: Character[]
    character?: Character,
    page?: Pick<Info<CharacterFilter>, 'info'>,
    currentFilter?: CharacterPropertyFilter
}

export const useCharactersStore = defineStore("characters", {
    state: (): CharacterStoreProperties =>  ({
        characters: [],
        character: undefined,
        page: undefined,
        currentFilter: {}
    }),
    getters: {
      getCharacters: ({ characters }) => characters,
      getCharacter: ({ character }) => character,
      getPageInfo: ({ page }) => page
    },
    actions: {
      async fetchCharacters(page: number, filter: CharacterPropertyFilter = {}) {
        try {

            if((
                this.characters.length >= page * 12 &&
                filter == this.currentFilter)
              ) {
                return;
            }
            
            
            const response = await api.getCharacters({page, ...filter})
            
            this.page = {info: response.data.info};
            this.currentFilter = Object.assign({}, filter);

            if(page == 1) {
              this.characters = [...(response.data.results || [])]
              return;
            }

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
                return this.character;
            }

            const response = await api.getCharacter(id);
            this.character = response.data

            return this.character;
          }
        catch (error) {
            alert(error)
            console.log(error)
        }
      }
    },
})