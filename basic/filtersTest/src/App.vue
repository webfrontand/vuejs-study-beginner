<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Filters & Mixins</h1>
        <p>{{ text | toUppercase | to-lowercase }}</p>
        <hr>
        <input v-model="filterText">
        <ul>
          <li v-for="skill in filteredSkill">{{ skill }}</li>
        </ul>
        <app-list></app-list>
      </div>
    </div>
  </div>
</template>

<script>
import List from './List.vue';

export default {
  data(){
    return {
      text: "hello there!",
      skills: ['nodejs', 'reactjs', 'vuejs'],
      filterText: ''
    }
  },
  filters: {
    toUppercase(value){
      return value.toUpperCase();
    }
  },
  computed: {
    filteredSkill(){
      return this.skills.filter((el) => {
        return el.match(this.filterText);
      })
    }
  },
  components: {
    appList: List
  }
}
</script>

<style>

</style>
