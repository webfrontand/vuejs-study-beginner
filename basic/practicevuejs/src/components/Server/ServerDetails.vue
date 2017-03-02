<template>
    <div class="col-xs-12 col-sm-6">
        <p v-if="!server">Server Details are currently not updated</p>
        <p v-else>server {{ server.id }} || {{ server.status }}</p>
        <hr>
        <button @click="reset">Reset</button>
    </div>

</template>

<script>
import { EventBus } from '../../main';
export default {
  data: function(){
    return {
      server: null
    }
  },
  methods: {
    reset(){
      this.server.status = 'Normal!!!!'
    }
  },
  created(){
    EventBus.$on('serverSelected', (select) => {
      this.server = select;
    })
  }
}
</script>

<style>

</style>
