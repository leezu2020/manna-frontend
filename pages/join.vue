<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--s">
        <h1 class="heading--title">만나기 위한 가입</h1>
        <form class="form">
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">이메일</label>
            <input
              id="userEmail"
              type="email"
              placeholder="이메일"
              class="input--text"
            />
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userPwd" class="label"
              >비밀번호(8자 이상 입력해 주세요)</label
            >
            <input
              id="userPwd"
              type="password"
              placeholder="비밀번호"
              minlength="8"
              class="input--text"
            />
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userId" class="label">비밀번호 확인</label>
            <input
              id="userPwd"
              type="password"
              placeholder="비밀번호 확인"
              minlength="8"
              class="input--text"
            />
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userId" class="label"
              >만날 때 사용할 아이디를 입력해 주세요</label
            >
            <input
              id="userId"
              type="text"
              placeholder="20자 이하로 입력해 주세요"
              maxlength="20"
              class="input--text"
            />
          </fieldset>
          <fieldset class="input--wrap">
            <span class="label">성별</span>
            <div class="l--flex--row jt--center">
              <div class="checkbox--wrap">
                <label for="male" class="label label--checkbox">남자</label>
                <input
                  type="radio"
                  id="man"
                  name="sex"
                  value="man"
                  class="input--checkbox"
                />
              </div>
              <div class="checkbox--wrap">
                <label for="female" class="label label--checkbox">여자</label>
                <input
                  type="radio"
                  id="female"
                  name="sex"
                  value="woman"
                  class="input--checkbox"
                />
              </div>
            </div>
          </fieldset>
          <button type="submit" class="btn--submit mg--m" @click.prevent="submitInfo">회원가입 완료</button>
        </form>
      </div>
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
