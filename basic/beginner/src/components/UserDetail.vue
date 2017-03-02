<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <h1>{{ switchName() }}</h1>
        <p>{{ userAge }}</p>
        <button @click="resetName">Reset Name</button>
        <button @click="resetFn()">Reset Name Props</button>
    </div>
</template>

<script>

/*
  자식 컴포넌트는 부모에게 props를 받게 된다. props의 유효성 체크가 반드시 필요하게 된다.
  받아야하는 props가 객체인데, 문자열을 받는다면 프로그램은 정상 작동하지 않을거다.

*/
import { eventBus } from '../main';
export default {
  props:{
    name: {
      type: [String, Array],
      required: true // 필수 입력
    },
    resetFn: {
      type: Function
    },
    userAge: Number
  },
  methods: {
    switchName(){
      return this.name.split("").reverse().join("")
    },
    resetName(){
      this.name = 'max';
      this.$emit('nameWasReset', this.name);
    }
  },
  created(){
    eventBus.$on('ageWasEdited', (age) => {
      this.userAge = age;
    })
  }
  /*
    created 라이프 사이클 훅에서 이벤트버스를 부르고
    eventBus.$on('name...', () => {
      this... = ....;
    })

  */
}
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
