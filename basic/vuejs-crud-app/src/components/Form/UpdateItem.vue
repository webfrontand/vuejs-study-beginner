<template lang="html">
  <div class="row">
    <div class="col-sm-12">
      <div class="form-group">
        <input type="text" class="form-control" placeholder="수정하세요" v-model="selected">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:['selected']
}
</script>

<style lang="css">
</style>
