<route>
{
  "name": "transition",
  "meta": {
    "linkNmae": "transition"
  }
}
</route>
<template>
  <div>
      <div class='div' :class="add ? 'divadd': ''"></div>
  <button @click="addn">加</button>
  <button @click="daddn">减</button>
  </div>
</template>

<script>
export default {
    data () {
        return {
            add: false
        }
    },
    methods: {
        addn() {
            this.add = true
        },
        daddn() {
            this.add = false
        }
    }
};
</script>

<style scoped>
.div{
    width: 100px;
    height: 300px;
    margin: auto;
    border: 1px solid #000;
    transition: height 3s;
}
.div.divadd{
    height: 600px;
}
</style>