<template>
  <div class="bg-white">
    <div
      class="block container max-w-2xl box-content p-5 m-10 h-auto mx-auto text-center shadow"
    >
      <h1 class="block mb-12 text-3xl font-bold text-blue-500 antialiased">
        만나기 위한 일정 등록
      </h1>
      <div class="space-y-4 font-normal font-normal text-gray-600">
        <input
          type="text"
          placeholder="일정명을 입력해 주세요."
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-100"
        />
        <div class="relative">
          <input
            type="password"
            placeholder="장소를 입력해 주세요"
            class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          />
        </div>
        <div class="grid grid-cols-6">
          <div class="col-span-5">
            <input
              type="text"
              v-model="participantTxt"
              placeholder="참여자를 입력해 주세요"
              class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
            />
          </div>
          <div
            @click="addParticipants"
            class="ml-2 w-full h-12 pt-2 mr-8 border-4 border-red-300 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
          >
            입력
          </div>
        </div>
        <div
          class="block w-full h-12 pl-3 border border-gray-100 rounded-md hover:border-transparent hover:shadow-xl focus:border-blue-400"
        >
          <span
            v-for="person in participants"
            :key="person"
            class="rounded-full py-1 px-2 m-1 text-center bg-yellow-100 font-bold"
          >
            {{ person }}
          </span>
        </div>
        <button
          @click="regSchedule"
          class="block w-full text-center h-12 rounded-md bg-blue-500 text-white font-bold tracking-widset hover:bg-blue-600 hover:shadow"
        >
          일정 등록
        </button>
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
    }
  },
  methods: {
    addParticipants() {
      this.participants.push(this.participantTxt)
      this.participantTxt = ''
    },
    regSchedule() {
      this.$emit('closeShow', false)
    },
  },
}
</script>

<style></style>
