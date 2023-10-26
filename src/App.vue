<script setup>
import Users from '@/components/Users.vue';
import Posts from '@/components/Posts.vue';
  
</script>

<template >
  <div id="app">
    <Users url="https://jsonplaceholder.typicode.com/users"/>
    <Posts url="https://jsonplaceholder.typicode.com/posts"/>

  </div>
</template>

<style scoped>

</style>