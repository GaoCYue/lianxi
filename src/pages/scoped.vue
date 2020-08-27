<route>
{
  "name": "scoped",
  "meta": {
    "linkNmae": "scoped"
  }
}
</route>
<template>
  <div id='warp'>
        <div id="shadow"></div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#warp {
    margin: 50px auto;
    width: 110px;
    height: 110px;
    overflow: hidden;
}
#shadow {
    /* position: absolute; */
    width: 100px;
    height: 100px;
    border: 1px solid #000;
    margin-right: 10px;
    box-shadow: 0 0 10px 0 #333;
}
</style>
