<template>
  <div class="tou">
    <!-- 使用 show 变量 -->
    <h1 v-if="show">博客</h1>
    <h1 v-else>博客 {{ data }}</h1>
    <p id="dataTimeDisplay"></p>
  </div>
</template>
<script lang="js">
export default {
  props: ['data'],
  data() {
    return {
      show: false // 定义 show 变量并初始化为 false
    };
  },
  name: 'Tuo',
  mounted() {
    function updateTime() {
      const now = new Date();
      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const dataTimeDisplay = document.getElementById("dataTimeDisplay");
      if (dataTimeDisplay) {
        dataTimeDisplay.textContent = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }
    }

    setInterval(updateTime, 1000);
    updateTime();
    // 现在可以使用 show 变量了
    if (this.show) {
      // 执行某些操作
    }
  }
};
</script>
<style>
.tou {
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}
</style>
