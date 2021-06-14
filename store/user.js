export const state = () => {
  me: null
}

export const mutations = {
  setMe(state, user) {
    state.me = user
  },
}

export const actions = {
  async Login({ commit }, user) {
    // 토큰 가져오기
    // const token = localStorage.getItem("token")
    const token =
      'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJndW5raW0uZGV2QGdtYWlsLmNvbSIsInJvbGVzIjpbIlJPTEVfVVNFUiJdLCJpc3MiOiJtYW5uYSIsImlhdCI6MTYyMzU5MDk4OSwiZXhwIjoxNzMxNTkwOTg5fQ.brib1XgyH6mXuYrH_PKA4sPGXXi_R4Qq1tOqQMWcMmkEzdkH2lHY0fOAs9YZMVue51DPb7vrXNMbFHGo33Gkuw'
    console.log('Login 시작', user)
    const res = await this.$axios.post('/api/auth/login', user, {
      headers: { authorization: token },
    })
    console.log('Login 결과', res)
    commit('setMe', user)
  },
}
