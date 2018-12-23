<template>
  <div id="app">
    <div class="nav">
        <div class="nav-title" onclick="window.location.href='/'" style="cursor: pointer;"><img src="./assets/muben logo 2.png" width="6%"> Sixuan Li</div>
        <ul>
            <li class="nav-title" onclick="window.location.href='/'" ><img src="/images/index/muben logo 2.png" width="6%" > Sixuan Li</li>
            <li onclick="window.location.href='/'">Work</li>
            <li onclick="window.location.href='/about'">Resume</li>
            <li onclick="window.location.href='/about'">About</li>
        </ul>
    </div>
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
