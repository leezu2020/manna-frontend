<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--s">
        <h1 class="heading--title">menu</h1>
        <NuxtLink to="/calendar" class="btn--link btn--link--home"
          >약속 캘린더</NuxtLink
        >
        <NuxtLink to="/list" class="btn--link btn--link--home"
          >내 약속 가기</NuxtLink
        >
        <NuxtLink to="/" class="btn--link btn--link--home"
          >약속 만들기</NuxtLink
        >
        <span class="text-center text-blue-700 font-bold text-xl">로그아웃</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
