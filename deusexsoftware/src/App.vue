<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view class="page container-fluid"/>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/NavBar'
export default {
  name: 'app',
}
</script>

<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

* {
    font-family: "San Francisco";
}

.page{
  margin-top: 70px;
}

.page-title{
  text-align: center;
  padding-left: 15px;
}

a{
  -webkit-transition:color 250ms ease-out;
  -moz-transition:color 250ms ease-out; 
  -o-transition:color 250ms ease-out;
  transition:color 250ms ease-out;
}

.router-link-exact-active{
  color: white;
}

.dropdown-menu .router-link-exact-active{
  color: black;
  font-weight: bold;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

.float-left{
  float: left;
}

.float-right{
  float: right;
}

.bg-black{
  background-color: black;
}
</style>



