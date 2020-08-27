<template>
  <div class="app-mark" @click="close" :class="show ? 'show': 'hide'">
    <slot name="center" class="center" />
  </div>
</template>

<script>
export default {
  name: 'Mark',
  data () {
    return {
      show: false
    }
  },
  methods: {
    close () {
      this.show = false
      console.log('close')
      console.log(this.show)
    },
    open () {
      this.show = true
      console.log('open')
      console.log(this.show)
    }
  }
}
</script>

<style scoped>
.app-mark{
  transition: opacity 1s;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,.3);

}
.app-mark .center {
  position: absolute;
  top:0;
  left: 0;
  right: 0;
  bottom: 0;
  margin:auto;
}
.app-mark.show{
    display: block;
    opacity: 1;
}
.app-mark.hide{
    display: none;
    opacity: 0;
}
</style>
