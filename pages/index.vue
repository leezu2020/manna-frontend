<template>
  <div class="container container--home l--table">
    <div class="l--cell">
      <div class="box box--home">
        <h1>
          <p class="heading--title--home">지금 당장<i class="icon icon--right">🏃</i></p>
          <NuxtLink to="/" class="btn--link btn--link--home">만나요</NuxtLink>
          <p class="heading--title--home"><i class="icon icon--left">🌡</i>36.5도씨</p>
        </h1>
        <div class="l--flex--row mg--xl">
          <NuxtLink to="/join" class="btn--link btn--link--account">회원가입</NuxtLink>
          <NuxtLink to="/login" class="btn--link btn--link--account">로그인</NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>

</style>
