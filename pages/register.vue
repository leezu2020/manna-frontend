<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--m">
        <h1 class="heading--title">약속 후보 등록</h1>
        <div class="form">
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">약속명을 입력해 주세요.</label>
            <input
              id="name"
              type="text"
              v-model="promiseName"
              placeholder="30자 이하로 입력해 주세요"
              class="input--text input--text--white"
            />
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              약속날짜
              <span class="l--block detail"
                >(약속 날짜 후보로 등록되며, 해당 월 안에서 날짜 후보를 추가 할
                수 있습니다.)</span
              >
            </label>

            <div class="grid grid-cols-6 gap-4">
              <div v-for="n in (1, 12)" :key="n">
                <input type="radio" v-model="month" name="month" :value="n" />
                {{ n }} 월
              </div>
            </div>
            <!--
            <div class="grid grid-flow-col gird-cols-6 grid-rows-2 gap-4">
              <button
                v-for="n in (1, 12)"
                :key="n"
                type="button"
                class="rounded-xl bg-blue-400 text-white font-bold text-xl"
                @click.prevent="getMonth(n)"
              >
                {{ n }} 월
              </button>
            </div>
            -->
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              약속에 참여할 인원을 추가해 주세요.
            </label>
            <div class="l--flex--row jt--space">
              <input
                id="member"
                type="text"
                v-model="participantTxt"
                placeholder="아이디로 입력해 주세요"
                class="input--text input--text--white"
              />
              <button
                @click.prevent="addParticipants"
                class="btn--submit btn--submit--s"
              >
                추가
              </button>
            </div>
          </fieldset>
          <div class="list__wrap">
            <p class="list__title">참여자</p>
            <ul class="list">
              <li
                v-for="person in participants"
                :key="person"
                class="list__item"
              >
                {{ person }}
              </li>
            </ul>
          </div>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              약속 날짜, 시간, 장소 후보를 등록 할 수 있는 기간을 설정해 주세요.
            </label>
            <div class="inline__wrap">
              <span class="inline detail">오늘로부터</span
              ><input
                v-model="due"
                id="period"
                type="number"
                class="input--text input--text--white w--small inline"
              /><span class="inline detail">일 동안</span>
            </div>
          </fieldset>
          <button @click="regSchedule" class="btn--submit mg--m">
            약속 만들기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      participantTxt: '',
      // 추후에 [] 으로 변경 예정
      participants: ['지금', '만나', '우리'],
      due: 1,
      month: '',
      promiseName: '',
    }
  },
  created() {
    this.date = this.$route.params.date
  },
  methods: {
    addParticipants() {
      // api 통한 참여자 아이디로 자동완성 만들기
      this.participants.push(this.participantTxt)
      this.participantTxt = ''
    },
    regSchedule() {
      // api 통한 약속 만들기
      this.$store.dispatch('promise/addPromise', {
        promiseName: this.promiseName,
        month: this.month,
        limitDatetime: this.calLimitDate(),
        emails: this.participants,
      })
      // calendar.vue페이지로 강제이동
      this.$router.push('/calendar')
    },
    calLimitDate() {
      var now = new Date()
      const dueDate = new Date(now.setDate(now.getDate() + parseInt(this.due)))
      const year = dueDate.getFullYear()
      const month = dueDate.getMonth() + 1
      const date = dueDate.getDate()

      console.log(dueDate, year, month, date, this.due)

      return year + '-' + month + '-' + date
    },
  },
}
</script>

<style></style>
