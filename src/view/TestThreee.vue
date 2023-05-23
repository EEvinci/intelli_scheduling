<template>
  <view class="max">
      <image src="../assets/123.png" mode=""></image>
  </view>
</template>

<script>
  export default {
      data() {
          return {
              
          }
      },
      methods: {
          
      }
  }
</script>

<style lang="scss" scoped>
  .max{
      image{
           z-index:-1; 
           width:100%; 
           height:100%; 
           position: fixed; 
           top:0; 
      }
  }
</style>