<template lang="html">
  <div>
    <div class="title">
        <slot name="title"></slot>
        <span><slot name="subtitle">the subtitle</slot></span>
    </div>
    <hr>
    <div>
        <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  /*
  slot 처리된 요소의 스타일 처리는 자식에서 처리한다.
  <app-quote>
    <h1>I'm Slot!</h1>
  </app-quote>
  자식에서 스타일처리
  */
}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #000;
    padding: 30px;
    margin: 30px auto;
    text-align: center;
  }

  h2 {
    color:red;
  }

  .title {
    font-style: italic;
  }
</style>
