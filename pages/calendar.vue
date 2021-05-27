<template>
  <div>
    <div class="text-3xl text-center font-bold mt-10">일정</div>
    <div class="space-x-5">
      <calendar-main @changeShow="fromCalendarMain" />
    </div>
    <div v-show="isShow">
      <new-schedule @closeShow="fromNewSchedule" />
    </div>
  </div>
</template>

<script>
import NewSchedule from '~/components/Calendar/NewSchedule.vue'
import CalendarMain from '../components/Calendar/CalendarMain'

export default {
  components: {
    CalendarMain,
    NewSchedule,
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    fromCalendarMain(show) {
      this.isShow = show
    },
    fromNewSchedule(show) {
      this.isShow = show
    },
  },
}
</script>
