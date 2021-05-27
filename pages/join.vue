<template>
  <div class="w-screen h-auto bg-white">
    <div
      class="block container w-full max-w-sm box-content p-10 m-40 h-auto mx-auto rounded-xl text-center shadow"
    >
      <h1 class="block mb-12 text-3xl font-bold text-blue-500 antialiased">
        만나기 위한 가입
      </h1>
      <form class="space-y-4 font-normal font-normal text-gray-600">
        <input
          type="text"
          placeholder="아이디를 입력해 주세요"
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-100"
          v-model="ID"
        />
        <div class="relative">
          <input
            type="password"
            placeholder="비밀번호를 입력해 주세요"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            v-model="Pwd"
          />
          <i v-on:click="pwdUnlock" class="pwdBtn absolute top-3 right-1"
            >보기</i
          >
        </div>
        <div class="relative">
          <input
            type="password"
            placeholder="비밀번호를 한 번 더 입력해 주세요"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            v-model="PwdCheck"
          />
          <i v-on:click="pwdUnlock" class="pwdBtn absolute top-3 right-1"
            >보기</i
          >
        </div>
        <input
          type="email"
          placeholder="이메일을 입력해 주세요"
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          v-model="Email"
        />
        <fieldset class="block inline-flex">
          <div class="flex-1 inline-gird grid-cols-02 gap-x-4 mr-12">
            <label for="male" class="mr-1">남자</label>
            <input
              type="radio"
              id="man"
              name="sex"
              value="man"
              v-model="Gender"
              class="cursor-pointer transform delay-75 hover:scale-125"
            />
          </div>
          <div class="flex-2 inline-gird grid-cols-02 gap-x-4">
            <label for="female" class="mr-1">여자</label>
            <input
              type="radio"
              id="female"
              name="sex"
              value="woman"
              v-model="Gender"
              class="cursor-pointer transform delay-75 hover:scale-125"
            />
          </div>
        </fieldset>
        <button
          type="submit"
          class="block w-full text-center h-12 rounded-md bg-blue-500 text-white font-bold tracking-widset hover:bg-blue-600 hover:shadow"
          @click.prevent="submitInfo()"
        >
          SIGN UP!
        </button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  data() {
    return {
      ID: '',
      Pwd: '',
      PwdCheck: '',
      Email: '',
      Gender: '',
    }
  },
  methods: {
    pwdUnlock: function (event) {
      const password = event.target.previousElementSibling
      const isLocked = password.type === 'password' ? true : false
      if (isLocked) password.type = 'text'
      else password.type = 'password'
    },
    submitInfo() {
      let info = {
        id: this.ID,
        password: this.Pwd,
        email: this.email,
        gender: this.Sex,
      }
      console.log(info, info.email)
    },
  },
}
</script>

<style scoped></style>
