<template>
  <Bubble />
  <Return />
  <Tuo :data="someData" />
</template>
<script lang="js">
import Return from '@/components/return.vue';
import Tuo from '@/components/tuo.vue';

export default {
  components: {
    Return,
    Tuo
  },
  data() {
    return {
      msg: "Welcome to the About Page",
      someData: "评论区" // 定义 someData
    };
  }
};
</script>
<style></style>
