<template>
  <div id="app">
    <div class="nav">
        <div class="nav-title" onclick="window.location.href='/'" style="cursor: pointer;"><img src="./assets/muben logo 2.png" width="20rem"> Sixuan Li</div>
        <ul>
            <li onclick="window.location.href='/'">Work</li>
            <li onclick="window.location.href='/about'">Resume</li>
            <li onclick="window.location.href='/about'">About</li> 
        </ul>
    </div>
    <router-view/>
    <div class="copyright">
        <div class="image-middle-container">
            <img src="./assets/muben logo 2.png" width="24px" hight="24px" style="margin: 20px 0" >
        </div>
        Design & Code by Sixuan Li &copy; 2018
    </div>
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
  margin-top: 6rem;
}
.icon {
    width: 1.2em;
    height: 1.2em;
    vertical-align: -0.15em;
    /* fill: currentColor;  */
    fill: rgb(190, 190, 190);
    overflow: hidden;
    display: inline;
    margin: 0.6rem 0.7rem 0.2rem 0.1rem;
    position:relative;
    float:left;
}
a {
    color: #000000;
}
.nav {
    position: relative;
    margin: 5rem 1rem 3rem 1rem;
    height: 2rem
}

.nav .nav-title {
    position: absolute;
    left: 18rem;
    /* float: left; */
    height: 3rem;
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
    float: right;
    right: 0;
    margin-right: 18rem;
    font-weight: normal;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #000000;
}
.nav >ul >li {
    margin: 0 2rem;
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
.copyright{
    float:center;
    padding: 4rem 0;
    text-align: center;
    font-size: 12px;
    font-family: Myriadpro;
    color: #9b9b9b; 
    margin-top: 1rem;
}
.image-middle-container{
    text-align: center;
}

@media (max-width: 40em)  {
  /* Pull out the header and footer */
  .nav{
      margin:0;
  }
  .nav .nav-title {
    left: 0rem;
    font-size: 30px;
  }
  .nav >ul{
    list-style-type:none;
    right: 0rem;
    margin-right: 0rem;
}
.nav >ul >li {
    margin: 0 0.5rem;
}
  .copyright {
    text-align: center;
    margin: 0 auto;
    bottom: 0;
    float:center;
    padding: 4rem 0; 
    margin-top: 1rem;
  }
  /* Start the vertical centering */
  .image-middle-container {
    vertical-align: middle;
  }
  /* Handle the widths */
  .nav {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}

@media (max-width: 70em)and (min-width: 40em) {
  /* Pull out the header and footer */
    .nav{
      margin:auto;
  }
  .nav .nav-title {
    left: 5rem;
  }
    .nav >ul{
    list-style-type:none;
    right: 0rem;
    margin-right: 5rem;
    }
  
  .copyright {
    text-align: center;
    margin: 0 auto;
    bottom: 0;
  }
  /* Start the vertical centering */
  .image-middle-container {
    vertical-align: middle;
  }
  /* Handle the widths */
  .nav {
    width: 100%; /* Must be percentage or pixels for horizontal alignment */
  }
}




</style>
