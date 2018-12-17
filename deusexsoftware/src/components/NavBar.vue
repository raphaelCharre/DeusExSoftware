<template>
  <b-navbar toggleable="md" type="dark" variant="dark" fixed>
    <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
    <b-navbar-brand href="home">DeusEx:Software</b-navbar-brand>

    <b-collapse is-nav id="nav_collapse">
      <b-navbar-nav>
        <b-nav-item>
          <router-link tag="li" to="services">Services</router-link>
        </b-nav-item>

        <b-nav-item>
          <router-link tag="li" to="portfolio">Portfolio</router-link>
        </b-nav-item>

        <b-nav-item-dropdown text="A propos">
          <b-dropdown-item><router-link tag="li" to="about">Qui sommes nous ?</router-link></b-dropdown-item>
          <b-dropdown-item><router-link tag="li" to="contact">Contact</router-link></b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: "nav-bar"
};
</script>

<style scoped>
</style>


