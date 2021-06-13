export const state = () => {}

export const mutations = {}

export const actions = {
  async addPromise({ commit }, promise) {
    // 토큰 가져오기
    // const token = localStorage.getItem("token")
    const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndW5raW0uZGV2QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJtYW5uYSIsImlhdCI6MTYyMzU5MDk4OSwiZXhwIjoxNzMxNTkwOTg5fQ.brib1XgyH6mXuYrH_PKA4sPGXXi_R4Qq1tOqQMWcMmkEzdkH2lHY0fOAs9YZMVue51DPb7vrXNMbFHGo33Gkuw'

    console.log('addPromise 시작', promise)
    const res = await this.$axios.post(
      '/api/promise',
      promise,
      {
        headers: { authorization: token },
      }
    )
    console.log(res)
  },
}
