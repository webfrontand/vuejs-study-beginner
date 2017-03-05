<template lang="html">
  <ul class="list-group">
    <app-list v-for="(todo,index) in todos" :index="index" :work="todo.work">
      {{ todo.work }}
    </app-list>
  </ul>

</template>

<script>
import List from './List.vue';

export default {
  props:['todos'],
  components: {
    appList: List
  }
}
</script>

<style lang="css">
</style>
