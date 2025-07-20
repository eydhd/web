<template>
  <div class="container">
    <div class="search-container">
      <input v-model="text" @input="handleUpdate" />
      <button @click="handleUpdates">搜索</button>
    </div>
  </div>
  <p>{{ text }}</p>
</template>
<style>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  position: absolute;
}
.search-container {
  display: flex;
  width: 500px;
  height: 50px;
  line-height: 50px;
}
.search-container input {
  flex: 1;
  height: 50px;
  line-height: 50px;
  box-sizing: border-box;
  outline: none;
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  padding: 0 20px;
  transition: all 0.3s;
}
.search-container button {
  height: 50px;
  line-height: 50px;
  padding: 0 30px;
  border: none;
  box-sizing: border-box;
  background-color: #00d3ff;
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
}
.search-container input:focus {
  box-shadow: 0 0 5px #eee;
}
p {
  color: white;
}
</style>

<script setup lang="ts">
import { handleUpdate, handleUpdates } from "@/utils/w/Stabilization";
const text = handleUpdate("", 1000);
</script>
