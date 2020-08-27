<template>
  <div id="app">
    <div id="nav">
      <router-link v-for='item in pageRoutes' :key='item.path'
      class="nav-item"
      :to="`/${item.path}`">{{item.meta.linkNmae}}</router-link>
    </div>
    <router-view class="fill"/>
  </div>
</template>

<script>
import routes from 'vue-auto-routing'
export default {
  data () {
    return {
      links: routes
    }
  },
  computed: {
    pageRoutes () {
      console.log(this.links)
      return this.links.filter(item => item.meta)
    }
  }
}
</script>

<style>
html,body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  display: flex;
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
  width: 200px;
  flex-shrink: 0;
}
.nav-item {
  display: block;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-bottom: 1px solid #333;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration : none;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
.fill{
  flex-grow: 1;
  overflow-y: scroll;
}
</style>
