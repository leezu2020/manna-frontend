export const state = () => {}

export const mutations = {}

export const actions = {
    async addPromise({commit}, promise){
        console.log('addPromise 시작', promise)
        const res = await this.$axios.post('http://35.226.135.77:8080/api/promise', promise)
        console.log(res)
    }
}
