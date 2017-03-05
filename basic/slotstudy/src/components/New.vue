<template lang="html">
  <div>
    <h3>New Quote</h3>
    <button @click="counter++">Increment!!</button>
  </div>
</template>

<script>
export default {
  data: function(){
    return {
      counter: 0
    }
  }
}

/*
  컴포넌트를 변경시에 그전에 있던 상태를 저장하지 못한다는 이슈가 존재한다!
  그래서 <keep-alive></keep-alive> 가 필요하다!

*/
</script>

<style lang="css">
</style>
