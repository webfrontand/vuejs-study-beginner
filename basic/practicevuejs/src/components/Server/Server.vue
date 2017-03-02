<template>
  <li
    class="list-group-item"
    @click="serverSelected"
    >#{{server.id}}</li>
</template>

<script>

  import { EventBus } from '../../main';
  export default {
    props: ['server'],
    methods: {
      serverSelected(){
        EventBus.$emit('serverSelected', this.server)
      }
    }
  }
</script>

<style>

</style>
