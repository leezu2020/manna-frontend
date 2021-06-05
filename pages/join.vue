<template>
  <div class="w-screen h-auto bg-white">
    <div
      class="block container w-full max-w-sm box-content p-10 m-40 h-auto mx-auto rounded-xl text-center shadow"
    >
      <h1 class="block mb-12 text-3xl font-bold text-blue-500 antialiased">
        만나기 위한 가입
      </h1>
      <form class="space-y-4 font-normal text-gray-600">
        <p class="text-blue-600 font-bold text-left">이메일</p>
        <input
          type="email"
          placeholder="이메일"
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-100"
          v-model="Email"
        />
        <!-- 아이디 오류 출력 -->
        <span v-if="msg.ID" class="text-red-500">{{ msg.ID }}</span>

        <!-- 비밀번호 -->
        <div class="relative">
          <p class="text-blue-600 font-bold text-left">
            비밀번호 (8자 이상 입력해주세요.)
          </p>
          <input
            type="password"
            placeholder="비밀번호"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            v-model="Pwd"
          />
          <i v-on:click="pwdUnlock" class="pwdBtn absolute top-3 right-1"
            >보기</i
          >
        </div>
        <!-- 비밀번호 오류 출력 -->
        <span v-if="msg.Pwd" class="text-red-500">{{ msg.Pwd }}</span>

        <div class="relative">
          <p class="text-blue-600 font-bold text-left">비밀번호 확인</p>
          <input
            type="password"
            placeholder="비밀번호 확인"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            v-model="PwdCheck"
          />
          <i v-on:click="pwdUnlock" class="pwdBtn absolute top-3 right-1"
            >보기</i
          >
        </div>
        <!-- 비밀번호 확인 오류 출력 -->
        <span v-if="msg.PwdCheck" class="text-red-500">{{ msg.PwdCheck }}</span>

        <p class="text-blue-600 font-bold text-left">
          만날 때 사용할 아이디를 입력해 주세요
        </p>
        <input
          type="text"
          placeholder="아이디"
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          v-model="ID"
        />
        <!-- 이메일 오류 출력 -->
        <span v-if="msg.Email" class="text-red-500">{{ msg.Email }}</span>

        <p class="text-blue-600 font-bold text-left">성별</p>
        <fieldset class="block inline-flex">
          <div class="flex-1 inline-gird grid-cols-02 gap-x-4 mr-12">
            <label for="male" class="mr-1">남자</label>
            <input
              type="radio"
              id="man"
              name="sex"
              value="M"
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
              value="F"
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
          회원가입 완료
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
      msg: [],
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
        email: this.Email,
        gender: this.Gender,
      }
      console.log(info)
      // api 통한 회원가입

      // 회원가입 후, 로그인
      // 약속 캘린더로 이동
      this.$router.push('/calendar')
    },
    validateID(id) {
      if (id.length > 16) {
        this.msg['ID'] = '16자 이하로 입력해주세요.'
      } else {
        this.msg['ID'] = ''
      }
    },
    validatePwd(pwd) {
      const pwdReg = /^[0-9a-z]{6,20}$/

      if (pwd.length != 0) {
        if (!pwdReg.test(pwd)) {
          this.msg['Pwd'] = '영문자와 숫자로 6자 이상 20자 이내 입니다.'
        } else {
          this.msg['Pwd'] = ''
        }
      }
    },
    validateEmail(email) {
      const mailReg = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/

      if (email.length > 0) {
        if (!mailReg.test(email)) {
          this.msg['Email'] = '올바르지 않은 이메일 형식입니다.'
        } else {
          this.msg['Email'] = ''
        }
      }
    },
    checkPwd(pwdcheck) {
      if (pwdcheck != this.Pwd) {
        this.msg['PwdCheck'] = '비밀번호를 확인해주세요.'
      } else {
        this.msg['PwdCheck'] = ''
      }
    },
  },
  watch: {
    ID(value) {
      this.ID = value
      this.validateID(value)
    },
    Pwd(value) {
      this.Pwd = value
      this.validatePwd(value)
    },
    Email(value) {
      this.Email = value
      this.validateEmail(value)
    },
    PwdCheck(value) {
      this.PwdCheck = value
      this.checkPwd(value)
    },
  },
}
</script>

<style scoped></style>
