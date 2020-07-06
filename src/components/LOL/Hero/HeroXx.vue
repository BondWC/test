<template>
    <div>
        <div id="Xx-image">
            <img :src="url">
        </div>
        <div id="Xx-information">
            <br/>
            <h1>{{uName}}</h1><br/>
            <br/>
        </div>
        <div id="Xx-heroText">
          <router-link :to="'/'">返回</router-link>
          <button @click="doAxios"></button>
        </div>
        <div id="getAxios">
        </div>
    </div>
</template>
<script>
export default {
  data () {
    return {
      url: this.$route.query.uid,
      uName: this.$route.query.uname
    }
  },
  methods: {
    add () {
      this.$store.commit('increment')
    }
    // doAxios () {
    //   this.axios.get('/axiosJson').then(function () {
    //     alert('sssssssssss')
    //   })
    // }
  }
}
// let url = 'http://how2j.cn/study/json.txt'
// this.axios.get(url).then(function (response) {
//   var jsonObject = response.data
//   var jsonString = JSON.stringify(jsonObject)
//   document.getElementById('getAxios').innerHTML = '通过 axios 获取到的json数据：' + jsonString
// })
</script>
<style>
#Xx-image,#Xx-information{
float: left;
}
#Xx-information{
    margin-left: 30px;
    text-align: left;
}
#Xx-image img{
    width: 100px;
    height: 100px;
}
</style>
