<template>
  <Tuo :data="someData"></Tuo>
  <Return></Return>
  <div class="con">
    <div class="come">
      <em-button></em-button>
    </div>
    <div class="com">
      <input type="text" placeholder="  请输入评论内容" />
      <button>提交</button>
    </div>
  </div>
</template>

<script>
import Tuo from "@/components/tuo.vue";
import Return from "@/components/return.vue";
import EmButton from "@/components/en-button.vue";
import "./css/ibex.css";

export default {
  data() {
    return {
      msg: "Welcome to the About Page",
      someData: "评论区", // 定义 someData
    };
  },
  components: {
    Tuo,
    Return,
  },
};
</script>
