<template>
  <div class="box box--s">
    <span>march 30</span>
    <label class="label">이메일</label>
    <div id="name">{{ appointment.name }}</div>
    <label class="label">참여자</label>
    <span v-for="p in appointment.participants" :key="p">{{ p }}</span>
    <label class="label">장소</label>
    <div>{{ appointment.location }}</div>
    <nuxt-link to="/" class="btn--link btn--link--home"
      >의견내러 가기</nuxt-link
    >
  </div>
</template>

<script>
export default {
  props: ['appointment'],
}
</script>

<style></style>
