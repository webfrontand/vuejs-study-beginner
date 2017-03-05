<template>
  <div class="row">
    <app-quote v-for="(auote, index) in quotes" @click.native="deleteQuote(index)">
      {{auote}}
    </app-quote>
  </div>
</template>

<script>
/*
  native 이건 멀까..

*/
import Quote from './Quote.vue';
export default {
  props: ['quotes'],
  components: {
    appQuote: Quote
  },
  methods: {
    deleteQuote(index){
      this.$emit('deleteQuote', index)
    }
  }
}
</script>

<style lang="css">
</style>
