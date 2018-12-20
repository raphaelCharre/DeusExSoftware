<template>
  <div id="app">
    <nav-bar></nav-bar>
    <transition name="fade" mode="out-in">
      <router-view id="main" class="page"/>
    </transition>
    <app-footer></app-footer>
  </div>
</template>

<script>
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

a{
  -webkit-transition:all 250ms ease-out;
  -moz-transition:all 250ms ease-out; 
  -o-transition:all 250ms ease-out;
  transition:all 250ms ease-out;
}

a:hover{
  text-decoration: none;
}

#app{
  display: flex;
	flex-direction: column;
	min-height: 100vh;
}

.page{
  flex: 1;
}

.page-padding{
  padding-top: 70px;
}

.dark{
  background-color: rgba(40, 40, 40, 1);
  color: white;
}

.dark hr{
  display: block;
    height: 1px;
    border: 0;
    border-top: 1px solid gray;
    margin: 1em 0;
    padding: 0; 
}

.dark a{
  opacity: .5;
  color: rgba(255, 255, 255, .5);
  
}

.dark a:hover{
  opacity: .75;
}

.text-blue,a.text-blue{
  color: #007bff;
  opacity: 1;
}

a.text-blue:hover{
  opacity: .75;
}

.page-title{
  text-align: center;
  padding: 20px;
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

</style>



