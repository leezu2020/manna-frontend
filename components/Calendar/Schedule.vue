<template>
  <div>
    <div class="col-span-4 font-bold text-xl p-3">{{ date }}의 일정</div>
    <table class="border-3 border-green-300">
      <colgroup>
        <col style="width: 200px" />
        <col style="width: 400px" />
        <col style="width: 800px" />
      </colgroup>
      <thead class="font-bold text-2xl">
        <tr class="pb-4">
          <th >일정명</th>
          <th >장소</th>
          <th >참여자</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="a in appointments" :key="a.idx">
          <td>{{ a.name }}</td>
          <td>{{ a.location }}</td>
          <td>{{ a.participants }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  props: ['date'],
  data() {
    return {
      appointments: [
        {
          name: '로제떡볶이 ㄱㄱ',
          location: '서초떡볶이',
          participants: '취준쓰, 건빵, 댄, 스팸',
        },
        {
          name: '삼겹살 ㄱㄱ',
          location: '서초삼겹살',
          participants: '취준쓰, 건빵, 댄, 스팸',
        },
        {
          name: '파스타 ㄱㄱ',
          location: '서초파스타',
          participants: '취준쓰, 건빵, 댄, 스팸',
        },
      ],
    }
  },
}
</script>

<style></style>
