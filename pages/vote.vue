<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--m">
        <h1 class="heading--title">약속 투표</h1>
        <div class="form">
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">약속명</label>
            {{ promise.name }}
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label"> 참여자 </label>

            <div class="flex flex-wrap content-center">
              <div v-for="p in participants" :key="p.name" class="m-2">
                {{ p }}
              </div>
            </div>
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              날짜 투표
              <span class="l--block detail"
                >(한개의 날짜만 투표할 수 있습니다.)</span
              >
            </label>
            <div class="list__wrap">
              <select class="list">
                <option v-for="date in optionDates" :key="date" class="list__item">
                  <!--월 일 형식으로 변환하기-->
                  {{ date }}
                </option>
              </select>
            <!--
              <div class="list" v-for="date in optionDates" :key="date">
                <input
                  type="radio"
                  class="list__item"
                  v-model="pickdate"
                  :value="date"
                />
                {{ date }}
              </div>
              -->
            </div>
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              장소 투표
              <span class="l--block detail"
                >(한개의 장소만 투표할 수 있습니다.)</span
              ></label
            >
          </fieldset>
          <div class="list__wrap">
            <ul class="list">
              <li
                v-for="location in optionLocations"
                :key="location"
                class="list__item"
              >
                {{ location }}
              </li>
            </ul>
          </div>
          <button @click.prevent="vote" class="btn--submit mg--m">
            투표하기
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // asyncData? fetch? 다 props?
  // page 이동이니까 params로 넘겨받아서 요청으로 data 가져오기?
  //   async asyncData({ params, $axios }) {
  //     const promise = await $axios.get(`http://35.226.135.77:8080/api/add}`, {
  //       name: params,
  //     })
  //     return { promise }
  //   },
  data() {
    return {
      // 약속 더미 데이터
      promise: { name: '테스트 약속명' },
      // 참여자
      participants: ['준쓰', '건빵', '스팸', '댄', '속초'],
      // 추가된 날짜 목록
      optionDates: ['6월 7일', '6월 9일', '6월 10일'],
      // 추가된 장소
      optionLocations: ['대학로', '강남', '시흥'],
      pickdate: '',
      picklocation: '',
      modelConfig: {
        type: 'string',
        mask: 'YYYY-MM-DD',
      },
      attrs: [
        {
          key: 'today',
          bar: 'red',
          dates: new Date(2021, 5, 15),
        },
      ],
    }
  },
  methods: {
    voteDate() {
      this.optionDates.push(this.pickdate)
    },
    voteLocation() {
      this.optionLocations.push(this.picklocation)
      this.picklocation = ''
    },
    vote() {
      console.log('제출')
    },
  },
}
</script>

<style></style>
