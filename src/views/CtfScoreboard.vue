<template>
    <div>
      <Header />
      <main>
        <section id="scoreboard">
          <h2>Scoreboard</h2>
          <div id="score-list">
            <div v-for="entry in scoreboard" :key="entry.username">
              {{ entry.username }}: {{ entry.score }}
            </div>
          </div>
        </section>
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
    },
    data() {
      return {
        scoreboard: []
      }
    },
    created() {
      fetch('/api/scoreboard')
        .then(response => response.json())
        .then(data => {
          this.scoreboard = data;
        });
    }
  }
  </script>
  