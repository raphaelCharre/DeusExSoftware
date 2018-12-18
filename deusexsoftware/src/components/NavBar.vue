<template>
  <b-navbar id="navbar" toggleable="sm" type="dark" fixed="top">
    <div class="container">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand id="nav-brand" href="/">DeusEx:Software</b-navbar-brand>

      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav class="ml-auto">
          <b-nav-item>
            <router-link tag="li" to="/">Accueil</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link tag="li" to="services">Services</router-link>
          </b-nav-item>

          <b-nav-item>
            <router-link tag="li" to="portfolio">Portfolio</router-link>
          </b-nav-item>

          <b-nav-item-dropdown right text="A propos">
            <b-dropdown-item><router-link tag="li" to="about">Qui sommes nous ?</router-link></b-dropdown-item>
            <b-dropdown-item><router-link tag="li" to="contact">Contact</router-link></b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </div>
  </b-navbar>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style scoped>

#navbar{
  background-color:rgba(30, 30, 30, 1);
}
</style>


