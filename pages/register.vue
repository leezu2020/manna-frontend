<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--m">
        <h1 class="heading--title">약속 만들기</h1>
        <div class="form">
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">약속명을 입력해 주세요.</label>
            <input
              id="name"
              type="text"
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
            <input
              id="date"
              type="text"
              placeholder="30자 이하로 입력해 주세요"
              class="input--text input--text--white"
              readonly="readonly"
              v-model="date"
            />
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
      participants: ['지금', '만나', '우리'],
      due: 1,
      date: '',
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
      console.log(this.$nuxt.context)
      // calendar.vue페이지로 강제이동
      this.$router.push('/calendar')
    },
  },
  watch: {
    // 숫자만 입력
    // 다른 방법 생각해보기
    due: function () {
      return (this.due = this.due.replace(/[^0-9]/g, ''))
    },
  },
}
</script>

<style></style>
