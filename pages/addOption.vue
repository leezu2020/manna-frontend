<template>
  <div class="container l--table">
    <div class="l--cell">
      <div class="box box--m">
        <h1 class="heading--title">약속 후보 등록</h1>
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
              날짜 추가
              <span class="l--block detail"
                >(새로운 날짜를 추가해 주세요. 날짜는 3개까지 추가 할 수
                있습니다.)</span
              >
            </label>
            <div class="l--flex--row jt--space">
              <v-date-picker
                v-model="pickdate"
                :attributes="attrs"
                :model-config="modelConfig"
                is-required
              />
              {{ pickdate }}
              <button
                @click.prevent="addDate"
                class="btn--submit btn--submit--s"
              >
                추가
              </button>
            </div>
            <div class="list__wrap">
              <p class="list__title">추가된 날짜</p>
              <!-- 한줄에 5개만 출력되도록 수정을 원함, class에서 list 에다가 tailwindcss 까지 적용 x-->
              <ul class="list">
                <li v-for="date in optionDates" :key="date" class="list__item">
                  <!-- 월 일 형식으로 변환하기-->
                  {{ date }}
                </li>
              </ul>
            </div>
          </fieldset>
          <fieldset class="input--wrap">
            <label for="userEmail" class="label">
              장소 추가
              <span class="l--block detail"
                >(새로운 장소를 추가해 주세요. 장소는 제한없이 추가할 수
                있습니다.)</span
              ></label
            >
            <div class="l--flex--row jt--space">
              <input
                id="member"
                type="text"
                v-model="picklocation"
                placeholder="장소를 입력해 주세요"
                class="input--text input--text--white"
              />
              <button
                @click.prevent="addLocation"
                class="btn--submit btn--submit--s"
              >
                추가
              </button>
            </div>
          </fieldset>
          <div class="list__wrap">
            <p class="list__title">추가된 장소</p>
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
          <button @click.prevent="addPromiseOption" class="btn--submit mg--m">
            후보 등록 하기
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
    addDate() {
      this.optionDates.push(this.pickdate)
    },
    addLocation() {
      this.optionLocations.push(this.picklocation)
      this.picklocation = ''
    },
    addPromiseOption() {
      console.log('제출')
    },
  },
}
</script>

<style></style>
