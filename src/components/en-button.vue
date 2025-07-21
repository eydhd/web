<template>
  <div class="csvs">
    <button v-for="n in max" key="n">{{ msg }}</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      max: 5,
      msg: "点击我",
    };
  },
};
</script>

<style>
.csvs button {
  background-color: #00d3ff; /* 绿色背景 */
  border: none; /* 无边框 */
  color: white; /* 白色文字 */
}
</style>
