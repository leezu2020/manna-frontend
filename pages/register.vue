<template>
  <div class="bg-white">
    <div
      class="block container max-w-2xl box-content p-5 m-10 h-auto mx-auto shadow"
    >
      <h1
        class="block text-center mb-12 text-3xl font-bold text-blue-500 antialiased"
      >
        약속 만들기
      </h1>
      <div class="space-y-4 font-normal font-normal text-gray-600">
        <p class="text-blue-600 font-bold">약속명을 입력해 주세요.</p>
        <input
          type="text"
          placeholder="30자 이하로 입력해 주세요."
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-100"
        />
        <div class="relative">
          <p class="text-blue-600 font-bold">약속 날짜</p>
          <p class="text-blue-600 font-bold">
            (약속 날짜 후보로 등록되며, 해당 월 안에서 날짜 후보를 추가 할 수
            있습니다.)
          </p>
          <input
            type="text"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          />
        </div>
        <div class="grid grid-cols-6">
          <div class="col-span-5">
            <p class="text-blue-600 font-bold">
              약속에 참여할 인원을 추가해 주세요.
            </p>
            <input
              type="text"
              v-model="participantTxt"
              placeholder="참여자를 입력해 주세요"
              class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            />
          </div>
          <button
            @click.prevent="addParticipants"
            class="ml-2 w-full h-12 pt-2 mr-8 bg-blue-700 text-white hover:shadow-xl focus:bg-blue-400"
          >
            추가
          </button>
        </div>
        <div
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
        >
          <p class="text-blue-600 font-bold">참여자</p>
          <span
            v-for="person in participants"
            :key="person"
            class="rounded-full py-1 px-2 m-1 text-center bg-yellow-100 font-bold"
          >
            {{ person }}
          </span>
        </div>
        <div class="relative">
          <p class="text-blue-600 font-bold">
            약속 날짜, 시간, 장소 후보를 등록 할 수 있는 기간을 설정해 주세요.
          </p>
          오늘로부터
          <input
            type="text"
            placeholder="1"
            v-model="due"
            class="block h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          />일 동안
        </div>
        <button
          @click="regSchedule"
          class="block w-full text-center h-12 rounded-md bg-blue-500 text-white font-bold tracking-widset hover:bg-blue-600 hover:shadow"
        >
          약속 만들기
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['date'],
  data() {
    return {
      participantTxt: '',
      participants: ['지금', '만나', '우리'],
      due: 1,
    }
  },
  methods: {
    addParticipants() {
      this.participants.push(this.participantTxt)
      this.participantTxt = ''
    },
    regSchedule() {
      // api 통한 약속 만들기
      console.log(this.$nuxt.context)
      // calendar.vue페이지로 강제이동
      this.$router.push("/calendar")  
    },
  },
  watch: {
      // 숫자만 입력
      // 다른 방법 생각해보기
      due: function() {
          return this.due = this.due.replace(/[^0-9]/g, '');
      }
  }
}
</script>

<style></style>
