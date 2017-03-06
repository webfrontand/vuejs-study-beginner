import Vue from 'vue'
import App from './App.vue'


// global
Vue.directive('highlight', {
  bind(el, binding, vnode) {
    // el.style.backgroundColor = 'green';
    // el.style.backgroundColor = binding.value; // string 형으로 넣어야한다
    var delay = 0;
    if(binding.modifiers['delayed']){
      delay = 3000;
    }
    setTimeout(() => {
      if(binding.arg == 'background'){
        el.style.backgroundColor = binding.value;
      } else {
        el.style.color = binding.value;
      }
    }, delay)
  }
});

// hot directive work - hook functions?
/*
  bind(el, binding, vnode) => once directive is attached
  inserted(el, binding, vnode) => inserted in parent node
  update(el ,binding, vnode, oldVnode) => once component is updated
  componentUpdated(el, binding, vnode, oldVnode);
  unbind(el, binding, vnode)
*/
new Vue({
  el: '#app',
  render: h => h(App)
})
