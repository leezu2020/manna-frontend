<template>
  <div>
    <div class="text-3xl text-center font-bold mt-10">약속 캘린더</div>
    <div class="space-x-5">
      <div class="grid grid-cols-6 p-10 m-10">
        <div></div>
        <!-- 캘린더 -->
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
        <!-- 날짜별 일정-->
        <div class="col-span-3 p-5 text-center">
          <schedule :date="pickdate" />
        </div>
      </div>
    </div>
    <div class="text-center">
      <nuxt-link
        to="/register"
        class="text-2xl bg-blue-700 text-white font-bold"
        :date="pickdate"
      >
        이 날 약속 추가하기
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import Schedule from '~/components/Calendar/Schedule.vue'

export default {
  components: {
    Schedule,
  },
  data() {
    return {
      isShow: false,
      attrs: [
        {
          key: 'today',
          bar: 'red',
          dates: new Date(2021, 6, 15),
        },
      ],
      start: '',
      type: 'month',
      pickdate: new Date(2021, 6, 5), // yyyy-mm-dd 형식으로 바꾸는법은?
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD',
      },
    }
  },
}
</script>
