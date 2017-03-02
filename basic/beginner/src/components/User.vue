<template>
    <div class="component">
        <h1>The User Component</h1>
        <p>I'm an awesome User!!</p>
        <button @click="changeName">Change My Name</button>
        <p>{{ name }}</p>
        <hr>
        <div class="row">
            <div class="col-xs-12 col-sm-6">
                <app-user-detail
                :name="name"
                :resetFn="resetName"
                @nameWasReset="name = $event" ></app-user-detail>
            </div>
            <div class="col-xs-12 col-sm-6">
                <app-user-edit></app-user-edit>
            </div>
        </div>
    </div>
</template>

<script>
    import UserDetail from './UserDetail.vue';
    import UserEdit from './UserEdit.vue';
    /*
      부모 컴포넌트에서 자식 컴포넌트로 props를 흘러보낼수 있어!
      v-bind:name="name" data에 있는 name을 자식 컴포넌트로 흘러보낸다.

      User(부모) 에서 UserDetail 으로 데이터가 흐른다.


      형제 컴포넌트 사이끼리의 다이렉트는 props 공유는 불가능하다.
    */
    export default {
        data: function(){
          return {
            name: 'max'
          }
        },
        methods: {
          changeName(){
            this.name = "Anna"
          },
          resetName(){
            this.name = 'max'
          }
        },
        components: {
            appUserDetail: UserDetail,
            appUserEdit: UserEdit
        }
    }
</script>

<style scoped>
    div {
        background-color: lightblue;
    }
</style>
