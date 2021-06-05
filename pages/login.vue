<template>
  <div class="min-h-screen bg-white text-gray-800 antialiased px-4 py-6 flex flex-col justify-center lg:py-12">
    <div class="relative py-3 lg:max-w-full mx-auto text-center w-1/4">
      <div class="relative bg-white text-left">
        <div class="py-6 px-8">
          <input type="text" placeholder="Email" class=" border-2 border-gray-400 w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
          <input type="password" placeholder="Password" class=" border-2 border-gray-400 w-full h-5 px-3 py-5 mt-4 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md">
          <div class="flex flex-col">
            <button class="h-10 mt-4 bg-indigo-500 text-white rounded-lg">로그인</button>
            <button class="h-10 mt-4 bg-kakao-login bg-no-repeat bg-contain bg-center bg-kakao-yellow rounded-lg"></button>
            <a href="#" class="block mt-4 text-sm hover:underline text-blue-700">비밀번호를 잊으셨나요?</a>
            <nuxt-link to="/join" class="block mt-4 text-sm hover:underline text-blue-700">회원가입</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style scoped>

</style>
