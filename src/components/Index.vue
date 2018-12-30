<template>
  <div class = 'container'>
      <div class='part1'>
          <img v-bind:src=imgSrc width='450px'>
      </div>
      <div class='part2'>
     <h1>Hi~ I‘m Sixuan</h1>
     <h2>Designer  /  Developer  /  Maker</h2><br>
     <p>
        I'm currently a master student on<br>
        Technology Innovation @<br>
        Global Innovation Exchange,<br>
        University of Washington<br>
        <br>
        I work on creating things that<br> assist people in an intuitive,<br> inspiring and un-intrusive way :-)
     </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'image',
  data () {
    return {
      imgSrc: '../static/home/snowBackgroundFigma.png'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin: 100px 200px 50px 200px;
    float: middle;
}
h1{
    font-weight: bold;
    letter-spacing:2px;
    font-family: 'Lato', sans-serif;
    font-size: 28px;
    color: #202020;
    margin-top: top 20px;;
    text-align:left;
}
h2{
    font-weight: bold;
    letter-spacing:1px;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    color: #C9C9C9;
    margin:5px 0 0 0 ;
    text-align:left;
}
.part1{
    float: left;
    margin: 55px 0px 0px 150px;
}
.part2{
    float: right;
    margin: 0px 250px 0px 0;
}
p{
    font-family: 'Lora', serif;
    margin:0;
    line-height: 29px;
    font-size: 14px;
    letter-spacing: 0.04em;
    font-weight: lighter;
    color: #000000;
    text-align:left;
}
</style>
