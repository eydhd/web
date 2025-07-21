<template>
  <div class="page-container">
    <div class="error-content">
      <font-awesome-icon icon="exclamation-triangle" class="error-icon" />
      <h1 class="error-title">404 - 页面未找到</h1>
      <p class="error-message">您访问的页面可能已被移动、删除或暂时不可用</p>
      <router-link to="/" class="home-link">
        <button class="return-button">返回首页</button>
      </router-link>
    </div>
  </div>
</template>

// 移除未使用的FontAwesomeIcon导入
<script setup lang="ts">
// 清理后的脚本部分
</script>

<style scoped>
body {
  min-height: 100vh;
  background: #0c192c;
}
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
   background: #0c192c;
}

.error-content {
  text-align: center;
  padding: 2rem;
  max-width: 600px;
}

.error-icon {
  font-size: 4rem;
  color: #dc3545;
  margin-bottom: 1.5rem;
}

.error-title {
  font-size: 2.5rem;
  color: #343a40;
  margin-bottom: 1rem;
}

.error-message {
  font-size: 1.2rem;
  color: #6c757d;
  margin-bottom: 2rem;
}

.return-button {
  padding: 12px 24px;
  font-size: 1.1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.return-button:hover {
  background-color: #0056b3;
}
</style>