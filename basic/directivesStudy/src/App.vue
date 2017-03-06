<template>
  <div class="container">
    <div class="row">
      <div class="col-xs-12">
        <h1>Bulit-in Directives</h1>
        <p v-text="'some text'"></p>
        <p v-html="'<strong>Some text</strong>'"></p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <h1>Custom Directives</h1>
        <p v-highlight:background="'red'">color this</p>
        <p v-highlight.delayed="'red'">color this</p>
        <button v-onlike:click="clicked" class="btn btn-primary">click</button>
        <hr>
        <div class="width:100px; height:100px; background-color:higtlight">

        </div>
      </div>
    </div>


  </div>
</template>

<script>
export default {
  directives: {
    onlike: {
      bind(el, binding, vnode){
        // el.onclick = function(){
        //   binding.value();
        // }
        const type = binding.arg;
        const fn = binding.value;
        el.addEventListener(type, fn)
      }
    }
  },
  methods: {
    clicked(){
      alert('click')
    }
  }
}
</script>

<style>
</style>
