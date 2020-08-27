<route>
{
  "name": "promise",
  "meta": {
    "linkNmae": "promise.all"
  }
}
</route>
<template>
  <h1>生成 Promise.all</h1>
</template>

<script>
import util from '../mixin/util'
export default {
  mixins: [util],
  methods: {
    async test () {
      const funcList = []
      const arr = [5000, 4000, 3000, 2000, 1000]
      for (const item of arr) {
        const func = this.delay.bind(this, item)
        funcList.push(func)
      }
      const res = await Promise.all(funcList.map(item => item()))
      console.log(res)
    }
  },
  mounted () {
    this.test()
  }
}
</script>

<style>
</style>
