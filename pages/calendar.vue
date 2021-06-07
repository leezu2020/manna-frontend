<template>
  <div class="container">
    <div class="box box--xl">
      <h2 class="heading--title">약속 캘린더</h2>
      <div class="l--flex--row jt--space pd--l">
        <!-- 캘린더 -->
        <div class="calendar l--table">
          <div class="l--cell">
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
        </div>
        <!-- 날짜별 일정-->
        <div>
          <schedule :date="pickdate" />
        </div>
      </div>
      <!-- submit -->
      <div class="text--center">
        <nuxt-link
          :to="{ name: 'register', params: { date: pickdate } }"
          class="btn--submit btn--submit--m mg--m"
        >
          이 날 약속 추가하기
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script>
import Schedule from '~/components/Calendar/Schedule.vue'
import VueMoment from 'vue-moment'

export default {
  components: {
    Schedule,
    VueMoment,
  },
  data() {
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1
    const date = today.getDate()
    return {
      isShow: false,
      // 일정 날짜
      attrs: [
        {
          key: 'today',
          bar: 'red',
          dates: new Date(2021, 5, 15),
        },
      ],
      start: '',
      type: 'month',
      pickdate: year + '-' + month + '-' + date, // yyyy-mm-dd 형식으로 바꾸는법은?
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD',
      },
    }
  },
}
</script>
