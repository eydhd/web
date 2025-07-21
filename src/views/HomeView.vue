<template>
  <Tuo />
  <Dao />
</template>
<script>
import Dao from "@/components/dao.vue";
import Tuo from "@/components/tuo.vue";

export default {
  components: {
    Tuo,
    Dao,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
body {
  min-height: 100vh;
  background: #0c192c;
}
</style>
