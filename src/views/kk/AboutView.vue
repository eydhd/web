<template>
  <Tuo :data="someData"></Tuo>
  <Return></Return>
</template>
<script>
import Tuo from "@/components/tuo.vue";
import Return from "@/components/return.vue";

export default {
  data() {
    return {
      msg: "Welcome to the About Page",
      someData: "文章", // 定义 someData
    };
  },
  components: {
    Tuo,
    Return,
  },
};
</script>
