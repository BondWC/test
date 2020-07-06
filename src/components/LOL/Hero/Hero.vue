<template>
<div class="hero">
    <img :src="url">
</div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  props: ['url']
}
</script>
<style>
.hero img{
    width: 100px;
    height: 100px;
    cursor: pointer;
    transition: all 0.5s;
}
.hero img:hover{
    transform: scale(1.1);
    box-shadow: 2px 2px 10px #000;
    transition: all 0.2s;
}
.hero{
    float: left;
    margin: 5px;
}
</style>
