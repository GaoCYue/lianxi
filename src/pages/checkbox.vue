<route>
{
  "name": "checkbox",
  "meta": {
    "linkNmae": "checkbox"
  }
}
</route>
<template>
  <div>
        <input type="checkbox" id="checkbox1" value="value1" v-model="value1">
        <label for="checkbox">{{ value1 }}</label>
        <input type="checkbox" value="value2" id="checkbox2" v-model="value1">
        <label for="checkbox">{{ value2 }}</label>
  </div>
</template>

<script>
export default {
  data () {
      return {
          value1: [],
          value2: true
      }
  }
};
</script>

<style>
</style>