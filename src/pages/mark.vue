<route>
{
  "name": "mark",
  "meta": {
    "linkNmae": "mark"
  }
}
</route>
<template>
  <div class="contan">
    <div>
      广告图页
      <div @click="$refs.mark.open()">
        show
      </div>
      <div @click="$refs.mark.close()">
        hide
      </div>
    </div>
    <Mark ref="mark">
      <template #center>
        <div class="module center">
          hhh
        </div>
      </template>
    </Mark>
  </div>
</template>

<script>
import Mark from '../components/mark/mark'

export default {
  components: {
    Mark
  }
}
</script>

<style scoped>
.contan{
    position: relative;
    margin: auto;
    width: 300px;
    height: 500px;
    border: 1px solid #000;
}
.module{
  width: 150px;
  height: 100px;
  background-color: #fff;
}
.center {
    position: absolute;
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    margin:auto;
}
</style>
