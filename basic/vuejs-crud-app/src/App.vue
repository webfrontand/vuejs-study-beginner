<template>
  <div class="container">
    <app-header></app-header>
    <hr>
    <app-add-item></app-add-item>
    <hr>
    <app-lists :todos="todos"></app-lists>
    <hr>
    <app-info v-if="!isEdit"></app-info>
    <app-update-item v-else :selected="selected"></app-update-item>
  </div>
</template>

<script>
import Header from './components/Header/Header.vue';
import AddItem from './components/Form/AddItem.vue';
import Lists from './components/List/Lists.vue';
import Info from './components/Alert/Info.vue';
import UpdateItem from './components/Form/UpdateItem.vue';
import { EventBus } from './main';

export default {
  data(){
    return {
        todos:[
          { work: "vuejs study", complete: false }
        ],
        isEdit: false,
        selected: null
    }
  },
  created(){
    // add
    EventBus.$on('addItem', (value) => {
      this.todos.unshift({
        work: value,
        complete: false
      })
    });
    // remove
    EventBus.$on('removeItem', (index) => {
      this.todos.splice(index, 1)
    });
    // update
    EventBus.$on('toggleItem', (index) => {
      if(index > -1){
        this.isEdit = true;
        this.selected = this.todos[index].work;
      }
    })
  },
  components: {
    appHeader: Header,
    appAddItem: AddItem,
    appLists: Lists,
    appInfo: Info,
    appUpdateItem: UpdateItem
  }
}
</script>

<style>

</style>
