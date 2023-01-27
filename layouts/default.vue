<template>
  <div id="components-layout-demo-basic">
    <Header/>
    <a-row>
        <a-col>
            <nuxt/>
        </a-col>
    </a-row>
    
  </div>
</template>

<script>
import Header from "@/components/Header.vue"
export default {
  components: {
    Header,
   
  },
};
</script>

<style>

</style>