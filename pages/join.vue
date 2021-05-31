<template>
  <div class="container l--table">
      <div class="l--cell">
          <div class="box box--s">
            <h1 class="heading--title">만나기 위한 가입</h1>
            <form class="form">
                <fieldset class="input--wrap">
                    <label for="userEmail" class="label">이메일</label>
                    <input id="userEmail" type="email" placeholder="이메일" class="input--text">
                </fieldset>
                <fieldset class="input--wrap">
                    <label for="userPwd" class="label">비밀번호(8자 이상 입력해 주세요)</label>
                    <input id="userPwd" type="password" placeholder="비밀번호" minlength="8" class="input--text">
                </fieldset>
                <fieldset class="input--wrap">
                    <label for="userId" class="label">비밀번호 확인</label>
                    <input id="userPwd" type="password" placeholder="비밀번호 확인" minlength="8" class="input--text">
                </fieldset>
                <fieldset class="input--wrap">
                    <label for="userId" class="label">만날 때 사용할 아이디를 입력해 주세요</label>
                    <input id="userId" type="text" placeholder="20자 이하로 입력해 주세요" maxlength="20" class="input--text">
                </fieldset>
                <fieldset class="input--wrap">
                    <span class="label">성별</span>
                    <div class="l--flex--row">
                        <div class="checkbox--wrap">
                            <label for="male" class="label label--checkbox">남자</label>
                            <input type="radio" id="man" name="sex" value="man" class="input--checkbox"> 
                        </div>
                        <div class="checkbox--wrap">
                            <label for="female" class="label label--checkbox">여자</label>
                            <input type="radio" id="female" name="sex" value="woman" class="input--checkbox">
                        </div>
                    </div>
                </fieldset>
                <button type="submit" class="btn--submit mg--m">회원가입 완료</button>
        </form>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'join',
  methods: {
  }
}
</script>