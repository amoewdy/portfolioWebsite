<template>
  <div id="app">
    <div class="nav">
        <div class="nav-title" onclick="window.location.href='/'" style="cursor: pointer;"><img src="./assets/muben logo 2.png" width="20rem"> Sixuan Li</div>
        <ul>
            <li onclick="window.location.href='/'">Work</li>
             <!-- <li onclick="https://drive.google.com/file/d/1PDsDDt2Ex-EwX7r8kiax3OM7ld3jfxjm/view?usp=sharing'">Resume</li> -->
            <li><a target="blank" style="text-decoration: none;" href="https://drive.google.com/file/d/1PDsDDt2Ex-EwX7r8kiax3OM7ld3jfxjm/view?usp=sharing'">Resume</a></li>
            <li onclick="window.location.href='/'">About</li> 
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
  /* text-align: center; */
  color: #2c3e50;
  margin: 6rem 0rem 0rem 0rem;
}
.container{
    margin: 0rem 0rem 5rem 0rem;
    float: middle;
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
    margin: 5rem 1rem 1rem 1rem;
    height: 7rem
}
body{
  margin:0;
  padding:0;
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

.parent{
    display: flex;
    margin:4rem;
}
.left{
    /* flex: 0 0 100px; */
    flex:1;
    margin-right: 4rem;
    }
.info{
    margin-top:3rem;
    display: flex;
}
.left .info .left-left{
    flex: 0 0 100px;
}
.left .info .left-right{
    flex: 1;
    margin-right: 4rem;
}
.right{
    /* height: 100px; */
    flex: 0 0 200px;
    /* background-color: #f8f8f8; */
    background:linear-gradient(to right,#ffffff 0%,#ffffff 10%, #f7f7f7 0, #f7f7f7 60%,#ffffff 0%,#ffffff 20%);
    background-size: 190px;
}
.dark-page{
    position: relative;
    background-color: #f7f7f7;
    padding: 20px 20px 60px;
}
.light-page{
    position: relative;
    background-color: #ffffff;
    padding: 20px 20px 60px;
}
.first-page{
    position: relative;
    background-color: #fff;
    padding: 20px 20px 60px;
}
.paragraph{
    margin: 0px 0;
}
.bannner{
    width: 100%;
    /* margin-top: 60px; */
}
.child + .child{
    margin-left: 20px;
}
.content-container-title{
    max-width:890px;
    margin: auto;
}
.content-container{
    max-width:800px;
    margin: auto;
}
.content-container-large{
    max-width:1100px;
    margin: auto;
    float: middle;
    vertical-align: middle;
    text-align: center;
}
.title{
    margin-top: 40px;
    margin-bottom: 30px;
    padding-left: 0px;
    vertical-align: left;
    display:flex;
    /* border-left: 20px dashed #DEDEDE; */
}
.title .title-text{
        flex: 1;
}
.title .title-text>h4{
    margin: 0;
    font-weight: bold;
    font-family: 'Lora', serif;
    font-size: 29px;
    color:#c9c9c9;
    vertical-align: left;
}
.title .title-text>h5{
    margin-top: 0.1rem;
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color:#000000;
    vertical-align: left;
}
.title .title-color1{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #e2e2e2 0, #e2e2e2 27%, #f7f7f7 0%, #f7f7f7 73%)
}
.title .title-color2{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #ebebeb 0, #ebebeb 27%, #ffffff 0%, #ffffff 73%)
}
.title .title-color3{
    margin: 8px 19px 20px 0;
    flex: 0 0 17px;
    background:linear-gradient( #cecece 0, #cecece 27%, #e0e0e0 0%, #e0e0e0 73%)
}
.ending-pointer{
    text-align: right;
    margin: 20px 40px;
}

.ending-pointer>div{
    display: inline-block;
    line-height: 30px;
}

.ending-pointer>div:hover{
    cursor: pointer;
}
span{
    font-weight: bold;
    letter-spacing:2px;
    font-family: 'Lato', sans-serif;
    font-size: 20px;
    color: #202020;
    margin: 10px 0 20px 0;
    text-align:left;
}
.next{
    font-size: 18px;
    color: #c9caca;
}

.project{
    font-size: 24px;
    font-weight: bold;
}


</style>
