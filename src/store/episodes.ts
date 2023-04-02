import { defineStore } from 'pinia'
import * as api from 'rickmortyapi'
import { Episode } from 'rickmortyapi'


interface EpisodeStoreProperties {
    episodes: Episode[]
}

export const useEpisodesStore = defineStore("episodes", {
    state: (): EpisodeStoreProperties =>  ({
        episodes: []
    }),
    getters: {
      getEpisodes: ({ episodes }) => episodes
    },
    actions: {
      async fetchEpisodesByIds(ids: number[]) {
        try {
            const response = await api.getEpisode(ids)
            this.episodes = response.data;
        }
        catch (error) {
            alert(error)
            console.log(error)
        }
      },
    },
})