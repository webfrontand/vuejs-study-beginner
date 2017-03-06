<template>
  <div>
    <input v-model="filterText">
    <ul>
      <li v-for="skill in filteredSkill">{{ skill }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      skills: ['nodejs', 'reactjs', 'vuejs'],
      filterText: ''
    }
  },
  computed: {
    filteredSkill(){
      return this.skills.filter((el) => {
        return el.match(this.filterText);
      })
    }
  }
}
</script>

<style>

</style>
