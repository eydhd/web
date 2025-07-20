<template>
  <Tuo />
  <Dao />
  <Search></Search>
</template>
<script>
import Dao from "@/components/dao.vue";
import Search from "@/components/Search.vue";
import Tuo from "@/components/tuo.vue";

export default {
  components: {
    Tuo,
    Search,
    Dao,
  },
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
</style>
