<template lang="html">
  <li class="list-group-item">
    <slot></slot>
    <app-button @click.native="removeItem(index)">x</app-button>
    <app-button @click.native="updateItem(index)">Update</app-button>
  </li>
</template>

<script>
import { EventBus } from '../../main';
import Button from '../Control/Button.vue';

export default {
  props:['index', 'work'],
  methods: {
    removeItem(index){
      EventBus.$emit('removeItem', this.index);
    },
    updateItem(index){
      this.isEdit = !this.isEdit;
      if(!this.isEdit){
        EventBus.$emit('toggleItem', this.index)
      }
    }
  },
  components: {
    appButton: Button
  }
}
</script>

<style lang="css">
</style>
