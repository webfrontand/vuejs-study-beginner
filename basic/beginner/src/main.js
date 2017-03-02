import Vue from 'vue'
import App from './App.vue'
// import Home from './components/Home.vue';

export const eventBus = new Vue({
  methods: {
    changeAge(age){
      this.$emit('ageWasEdited', age)
    }
  }
});

// Vue.component('app-child', Home);
new Vue({
  el: '#app',
  render: h => h(App)
});

// event bus
