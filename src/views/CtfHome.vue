<template>
    <div>
      <Header />
      <main>
        <h2>Welcome to the CTF Site</h2>
      </main>
      <Footer />
    </div>
  </template>
  
  <script>
  import Header from '@/components/AppHeader.vue';
  import Footer from '@/components/AppFooter.vue';
  
  export default {
    components: {
      Header,
      Footer
    }
  }
  </script>
  