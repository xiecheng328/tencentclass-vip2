export const state = () => ({
  counter: 0,
  playlist: []
})

export const mutations = {
  add(state) {
    state.counter++
  },
  setPlaylist(state, list) {
    state.playlist = list
  }
}

export const actions = {
    nuxtServerInit(){
        console.log('-----nuxtServerInit-----')
    }
}
