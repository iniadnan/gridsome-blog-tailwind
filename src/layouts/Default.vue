<template>
  <div id="layout-default" class="min-h-screen bg-color-white-1">
    <slot/>
    <Footer></Footer>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Footer from '~/components/Footer.vue';

export default {
  components: {
    Footer
  }
}
</script>

<style>
body {
  font-family: 'Benne', serif;
}
h1, h2, h3, h4, h5, h6 {
  font-family: 'Castoro', serif;
}
p {
  font-family: 'Benne', serif;
}
a, button {
  transition: 0.15s ease-in;
  color: inherit;
}
</style>
