<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">manna</h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
      </div>
    </div>
    <ul class="space-y-4">
      <li>
        <div class="w-64 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">1</div>
      </li>
      <li>
        <div class="w-56 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">2</div>
      </li>
      <li>
        <div class="w-48 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">3</div>
      </li>
      <li>
        <div class="w-40 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">4</div>
      </li>
      <li>
        <div class="w-32 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">5</div>
      </li>
      <li>
        <div class="w-24 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">6</div>
      </li>
      <li>
        <div class="w-20 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">7</div>
      </li>
      <li>
        <div class="w-16 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">8</div>
      </li>
      <li>
        <div class="w-12 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">9</div>
      </li>
      <li>
        <div class="w-10 h-3 bg-gradient-to-br from-fuchsia-500 to-purple-600">10</div>
      </li>
    </ul>
    <div class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="" alt="ChitChat Logo">
      </div>
      <div>
        <div class="text-xl font-medium text-black">ChitChat</div>
        <p class="text-gray-500">You have a new message!</p>
      </div>
    </div>
    <div class="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
      <img class="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="" alt="Woman's Face">
      <div class="text-center space-y-2 sm:text-left">
        <div class="space-y-0.5">
          <p class="text-lg text-black font-semibold">
            Erin Lindford
          </p>
          <p class="text-gray-500 font-medium">
            Product Engineer
          </p>
        </div>
        <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
      </div>
    </div>    
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
