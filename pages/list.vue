<template>
  <div>
    <h1 class="heading--title">내 약속 목록</h1>
    <div class="container l--table">
    <!-- 약속 -->
      <div v-for="list in lists" :key="list.name" class="l--cell">
        <appointment :appointment=list />
      </div>
    </div>
  </div>
</template>

<script>
import appointment from '~/components/appointment.vue'
export default {
  components: { appointment },
  data() {
    return {
      lists: [
        {
          name: 'zz',
          participants: ['가가', '나나', '다다다'],
          location: '서울시 동작구 노량진 청년다방',
        },
        {
          name: '점심 회식',
          participants: ['가가', '나나', '다다다'],
          location: '서울시 동작구 노량진 청년다방',
        },
      ],
    }
  },
  // asyncData 로 약속 목록 불러오기
}
</script>

<style></style>
