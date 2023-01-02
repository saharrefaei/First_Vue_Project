<template>
<Headers/> 
<router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: 'App',
  components: {
    Headers:Header,
  }
}
</script>

<style>
*{
 font-family: Verdana;
        padding: 0;
        margin: 0;
        box-sizing: content-box; 
}
    
</style>
