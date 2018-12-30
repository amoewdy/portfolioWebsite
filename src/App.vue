<template>
  <div id="app">
    <div class="nav">
        <div class="nav-title" onclick="window.location.href='/'" style="cursor: pointer;"><img src="./assets/muben logo 2.png" width="6%"> Sixuan Li</div>
        <ul>
            <li onclick="window.location.href='/'">Work</li>
            <li onclick="window.location.href='/about'">Resume</li>
            <li onclick="window.location.href='/about'">About</li> 
        </ul>
    </div>
    <router-view/>
  </div>

</template>

<script>
export default {
  name: 'App'
}
// add google statistics later
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
a {
    color: #000000;
}
.nav {
    position: relative;
    margin: 80px 10px 30px 200px;
    height: 28px
}
.nav .nav-title {
    position: absolute;
    left: 5;
    float: left;
    height: 28px;
    font-family: optima;
    vertical-align: middle;
    /* font-family: 'Open Sans', sans-serif; */
    /* font-family: 'Rosario', sans-serif; */
    /* font-family: 'Arsenal', sans-serif;  */
    line-height: normal;
    font-size: 32px;
    color: #202020;
}
.nav >ul{
    list-style-type:none;
    position: absolute;
    right: 0;
    margin-right: 20em;
    line-height: 28px;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #000000;
}
.nav >ul >li {
    margin: 0 20px;
    text-decoration: none;
    list-style: none;
    display: inline;
    transition: 0.2s;
    font-size: 13px;
    color:#202020;
}
.nav >ul >li:hover {
    color: #959595;
    cursor: pointer;
    transition: 0.2s;
}

</style>
