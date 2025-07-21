<template>
  <div class="daohanglan">
    <button>首页</button>
    <button onclick="window.location.href = '/about'">文章</button>
    <button onclick="window.location.href = '/club'">俱乐部</button>
    <button onclick="window.location.href = '/Comment'">评论区</button>
    <button onclick="window.location.href = '/concerning'">关于</button>
  </div>
</template>
<style>
.daohanglan button {
  --glow-color: rgb(217, 176, 255);
  --glow-spread-color: rgba(191, 123, 255, 0.781);
  --enhanced-glow-color: rgb(231, 206, 255);
  --btn-color: rgb(100, 61, 136);
  border: 0.25em solid var(--glow-color);
  padding: 1em 3em;
  color: var(--glow-color);
  font-size: 15px;
  font-weight: bold;
  background-color: var(--btn-color);
  border-radius: 1em;
  outline: none;
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 1em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  text-shadow: 0 0 0.5em var(--glow-color);
  position: relative;
  transition: all 0.3s;
  /* 添加弯曲效果 */
  transform: perspective(500px) rotateX(20deg);
}

.daohanglan button::after {
  pointer-events: none;
  content: "";
  position: absolute;
  top: 120%;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: var(--glow-spread-color);
  filter: blur(2em);
  opacity: 0.7;
  transform: perspective(1.5em) rotateX(35deg) scale(1, 0.6);
}
.daohanglan button:hover {
  color: var(--btn-color);
  background-color: var(--glow-color);
  box-shadow: 0 0 1em 0.25em var(--glow-color),
    0 0 4em 2em var(--glow-spread-color),
    inset 0 0 0.75em 0.25em var(--glow-color);
  /* 鼠标悬停时调整弯曲效果 */
  transform: perspective(500px) rotateX(10deg);
}
.daohanglan button:active {
  box-shadow: 0 0 0.6em 0.25em var(--glow-color),
    0 0 2.5em 2em var(--glow-spread-color),
    inset 0 0 0.5em 0.25em var(--glow-color);
  /* 鼠标点击时调整弯曲效果 */
  transform: perspective(500px) rotateX(5deg);
}
.daohanglan {
  padding: 125px 25px;
  display: flex;
  position: absolute;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  text-align: center;
  color: white;
}
</style>
