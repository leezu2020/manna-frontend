<template>
  <div class="grid grid-cols-6 p-10 m-10">
    <div></div>
    <div class="col-span-2 p-5 border-4 border-red-400">
      <no-ssr>
        <v-date-picker
          is-expanded
          v-model="pickdate"
          :attributes="attrs"
          :model-config="modelConfig"
          is-required
        />
      </no-ssr>
    </div>
    <div class="col-span-3 p-5 text-center">
      <div class="grid grid-cols-5">
        <div class="col-span-4 font-bold text-xl p-3">{{ pickdate }} 일정</div>
        <div class="addSchedule font-bold mx-5 my-2 pt-1 rounded-full bg-blue-400 text-white" @click="newSchedule">추가</div>
      </div>
      <div class="container border-4 border-red-400">
        <table class="border-3 border-green-300">
          <colgroup>
            <col style="width: 200px" />
            <col style="width: 400px" />
            <col style="width: 800px" />
          </colgroup>
          <thead class="font-bold text-2xl">
            <tr class="pb-4">
              <th class="rounded-full m-1 bg-green-200">일정명</th>
              <th class="rounded-full m-3 bg-green-200">장소</th>
              <th class="rounded-full m-3 bg-green-200">참여자</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="s in schedules" :key="s.name" class="font-bold">
              <td>{{ s.name }}</td>
              <td>{{ s.location }}</td>
              <td>{{ s.participants }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      attrs: [
        {
          key: 'today',
          bar: 'red',
          dates: new Date(2021, 4, 15),
        },
      ],
      start: '',
      type: 'month',
      pickdate: '',
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD',
      },
      schedules: [
        {
          name: '일정1',
          location: '장소1',
          participants: ['지금', '만나', '우리'],
        },
      ],
    }
  },
  methods: {
    newSchedule() {
      console.log('추가 버튼 클릭됨')
      this.$emit('changeShow', true)
    },
  },
}
</script>
<style>
.addSchedule {
  cursor: pointer;
}
</style>
