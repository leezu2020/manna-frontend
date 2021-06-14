<template>
  <div class="schedule">
    <div class="heading--title heading--title--s">{{ date }}의 일정</div>
    <div class="table__wrap">
      <table class="table">
        <colgroup>
          <col style="width: 200px" />
          <col style="width: 400px" />
          <col style="width: 800px" />
        </colgroup>
        <thead class="thead">
          <tr class="tr">
            <th class="th">일정명</th>
            <th class="th">장소</th>
            <th class="th">참여자</th>
          </tr>
        </thead>
        <tbody class="tbody">
          <tr class="tr" v-for="a in appointments" :key="a.idx">
            <td class="td">{{ a.name }}</td>
            <td class="td">{{ a.location }}</td>
            <td class="td">{{ a.participants }}</td>
          </tr>
        </tbody>
      </table>
    </div>
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
