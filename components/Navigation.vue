<template>
    <div class="gnb">
        <div class="inner inline__wrap l--flex--row jt--space">
        <NuxtLink to="/" class="logo__wrap inline"><Logo/></NuxtLink>
        <div>
            <div class="menu__wrap inline">
                <NuxtLink to="/list" class="menu">내 약속 보기</NuxtLink>
                <NuxtLink to="/calendar" class="menu">약속 캘린더</NuxtLink>
                <NuxtLink to="/register" class="menu">약속 만들기</NuxtLink>
            </div>
            <div class="util__wrap inline l--flex--row jt--center">
                <a class="menu">로그아웃</a>
            </div>
        </div>
        </div>
    </div>
</template>
<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>