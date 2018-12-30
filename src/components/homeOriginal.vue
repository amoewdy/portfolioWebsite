<template>
  <div class = 'container'>
      <div class='part1'>
      
      </div>
      <div class='part2'>
     <h1>Hi~ I‘m Sixuan</h1><br>
     <p>
        Currently a master student on<br>
        Technology Innovation @<br>
        University of Washington<br>
        <br>
        I work on creating things that<br> assist people in an intuitive,<br> inspiring and un-intrusive way
     </p>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    margin: 50px 100px 50px 200px;
    float: middle;
}
h1{
    font-weight: bold;
    font-family: 'Lato', sans-serif;
    font-size: 32px;
    color: #202020;
}
.part1{ 
    float: left;
}
.p{
    font-family: 'Lora', serif;
    line-height: 27px;
    font-size: 15px;
    letter-spacing: 0.04em;
    font-weight: lighter;
    color: #000000;
}
</style>
