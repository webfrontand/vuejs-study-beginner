<template lang="html">
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <input type="text" class="form-control"placeholder="입력하세요" v-model="item" @keyup.enter="addItem">
      </div>
    </div>
  </div>
</template>

<script>
import { EventBus } from '../../main';

export default {
  data(){
    return {
      item: ''
    }
  },
  methods: {
    addItem(){
      EventBus.$emit('addItem', this.item);
      this.item = "";
    }
  }
}
</script>

<style lang="css">
</style>
