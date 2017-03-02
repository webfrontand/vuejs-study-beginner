<template>
    <div class="component">
        <h3>You may edit the User here!</h3>
        <p>Edit me!</p>
        <button @click="editAge">Edit Age</button>
        <p>{{ userAge }}</p>
    </div>
</template>

<script>
import { eventBus } from '../main';
export default {
  props: ['userAge'],
  methods: {
    editAge(){
      this.userAge = 30;
      // this.$emit('ageWasEdited', this.userAge)
      // eventBus.$emit('ageWasEdited', this.userAge);
      eventBus.changeAge(this.userAge);

      // 2번줄이랑 3번줄이랑 같은거야!
    }
  }
}
</script>

<style scoped>
    div {
        background-color: lightgreen;
    }
</style>
