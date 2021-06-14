<template>
  <div class="container container--home l--table">
    <!-- intro01 -->
    <div id="intro01" class="box--full l--flex--col jt--space">
      <div class="l--table">
        <div class="l--cell intro__txt text--center">
          <div class="txt__wrap mg--m"><span class="txt text--l"><i class="icon icon--m left">🔥</i>당신은 언제 가장 뜨거우셨나요?</span></div>
          <div class="txt__wrap mg--m"><span class="txt text--l">저는 약속을 잡을 때...</span></div>
          <div class="txt__wrap mg--l"><span class="txt text--l">만나고 싶은 사람들과 약속을 잡아 보세요.<i class="icon icon--m right">🏃‍♀️</i></span></div>
          <div class="txt__wrap mg--m"><span class="txt text--l">만나 36.5도씨</span></div>
          <div class="txt__wrap mg--m"><span class="txt text--l"><i class="icon icon--m left">📣</i>우리는 뜨거운 만남을 응원합니다</span></div>
        </div>
      </div>
      <div class="intro__btm text--center">
          <p class="txt">만나러 가기</p>
          <a href="#intro02" class="icon"><img class="img" src="../assets/images/icon_triangle.png" alt="go"></a>
      </div>
    </div>
    <!-- intro02 -->
    <div id="intro02" class="box--full l--flex--col jt--center">   
      <h1 class="box--m">
        <p class="heading--title--home">지금 당장<i class="icon icon--xl right">🏃</i></p>
        <NuxtLink to="/login" class="btn--link btn--link--home">만나요</NuxtLink>
        <p class="heading--title--home"><i class="icon icon--xl left">🌡</i>36.5도씨</p>
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({

})
</script>

<style>

</style>
