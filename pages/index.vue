<template>
  <h1
    class="title text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl md:text-8xl"
  >
    <div class="block test">🏃지금 당장</div>
    <div class="block next-btn">만나요</div>
    <div class="block">🌡36.5도씨</div>
  </h1>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>

<style>
body {
  background-color: #fffcf2;
}
.title {
  position: absolute;
  top: 50%;
  left: 50%;
  height: 240px;
  margin-top: -170px;
  text-align: right;
  transform: translate(-50%, -50%);

  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;
}
.next-btn {
  cursor: pointer;
  border-radius: 15px;
  padding: 5px 20px;
  background: #fffcf2;
  border: 5px solid;
  color: rgba(79, 70, 229, var(--tw-text-opacity));
  text-align: center;
  &:hover {
    background: rgba(79, 70, 229, var(--tw-text-opacity));
    color: #fffcf2;
    border: 5px solid rgba(79, 70, 229, var(--tw-text-opacity));
  }
}
</style>
