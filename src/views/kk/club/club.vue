<template>
  <Return />
  <Tuo :data="someData" />
</template>
<script>
import Return from "@/components/return.vue";
import Tuo from "@/components/tuo.vue";

export default {
  components: {
    Return,
    Tuo,
  },
  data() {
    return {
      msg: "Welcome to the About Page",
      someData: "俱乐部", // 定义 someData
    };
  },
};
</script>
<style></style>
