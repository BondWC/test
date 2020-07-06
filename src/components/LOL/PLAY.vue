<template>
<div>
    <h1>LOL</h1>
    <div id="HeaderSearch">
        <input type="text" v-model="searchText" />
        <button @click="doSearch()">搜索</button>
        <p></p>
    </div>
    <div id="heroList">
          <div v-for="hero in heros" :key="hero.name" @click="doAdd">
              <router-link :to="'/HeroXx?uid='+ hero.url +'&uname=' +hero.name" >
              <Hero v-bind:url="hero.url"></Hero>
              </router-link>
          </div>
    </div>
    <div>
      一共点击了{{this.$store.state.counter}}
    </div>
</div>
</template>
<script>
import Hero from './Hero/Hero'
import imgAkali from '@/assets/akali.jpg'
import imgAike from '@/assets/aike.jpg'
import imgAnni from '@/assets/anni.jpg'
import imgJinkesi from '@/assets/jinkesi.jpg'
import imgKamier from '@/assets/kamier.jpg'
import imgWei from '@/assets/wei.jpg'
import imgNikou from '@/assets/nikou.jpg'
import imgYasuo from '@/assets/yasuo.jpg'
import imgNunu from '@/assets/nunu.jpg'
// 全部数据
let herosUrl = [
  {url: imgAkali, name: 'akali'},
  {url: imgAike, name: 'aike'},
  {url: imgAnni, name: 'anni'},
  {url: imgJinkesi, name: 'jinkesi'},
  {url: imgKamier, name: 'kamier'},
  {url: imgWei, name: 'wei'},
  {url: imgNikou, name: 'nikou'},
  {url: imgYasuo, name: 'yasuo'},
  {url: imgNunu, name: 'nunu'}]
export default {
  name: 'PLAY',
  data () {
    return {
      heros: herosUrl,
      searchText: ''
    }
  },
  components: {
    Hero
  },
  methods: {
    doSearch () {
      if (this.searchText === '') {
        // 啥也不如就是全部
        this.heros = [
          {url: imgAkali, name: 'akali'},
          {url: imgAike, name: 'aike'},
          {url: imgAnni, name: 'anni'},
          {url: imgJinkesi, name: 'jinkesi'},
          {url: imgKamier, name: 'kamier'},
          {url: imgWei, name: 'wei'},
          {url: imgNikou, name: 'nikou'},
          {url: imgYasuo, name: 'yasuo'},
          {url: imgNunu, name: 'nunu'}
        ]
      } else {
        for (let i = 0; i < herosUrl.length; i++) {
          if (herosUrl[i].name === this.searchText) {
            // 如果有一样的会被检索出来
            this.heros = [{url: require('@/assets/' + this.searchText + '.jpg'), name: this.searchText}]
            break
          } else {
            // 瞎入的话就啥也没有
            this.heros = []
          }
        }
      }
    },
    doAdd () {
      this.$store.commit('increment')
    }
  }
}
</script>
<style>
#heroList{
    width: 350px;
    height: 350px;
    margin: 0 auto;
}
</style>
