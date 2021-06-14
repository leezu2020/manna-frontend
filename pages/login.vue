<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--s">
        <h1 class="heading--title">로그인</h1>
        <form class="form">
          <div class="input--wrap">
            <input type="text" placeholder="Email" class="input--text">
          </div>
          <div class="input--wrap">
            <input type="password" placeholder="Password" class="input--text">
          </div>
          <button class="btn--submit">로그인</button>
        </form>
        <button class="btn--img mg--m">
          <img src="../assets/images/img_kakao_login_l.png" alt="카카오 로그인" class="img">
        </button>
        <NuxtLink to="/" class="l--block mg--xs text--s text--s--violet">비밀번호를 잊으셨나요?</NuxtLink>
        <NuxtLink to="/join" class="l--block mg--xs text--s text--s--violet">회원가입</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
