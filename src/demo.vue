
<script setup>

// export default {

// }

// import { data } from './data/data.js'

import data  from './data/data'


</script>


<template>
   <div>
      <h1 class="green text-3xl">{{ data.message }}</h1>
      <span>Today is : {{ data.date }}</span>
      <br>
      <span>You Have {{ data.tasks.length }} Task Today</span>
   </div>

   <span></span>
</template>


<style scoped>



</style>