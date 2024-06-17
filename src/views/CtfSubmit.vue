<template>
    <div>
      <Header />
      <main>
        <section id="submit">
          <h2>Submit</h2>
          <form @submit.prevent="submitFlag">
            <label for="flag">Flag:</label>
            <input type="text" v-model="flag">
            <button type="submit">Submit</button>
          </form>
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
        flag: ''
      }
    },
    methods: {
      submitFlag() {
        fetch('/api/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ flag: this.flag })
        })
        .then(response => {
          if (response.ok) {
            alert('Flag submitted successfully!');
          } else {
            alert('Invalid flag!');
          }
        })
        .catch(error => {
          console.error('Error submitting flag:', error);
          alert('Error submitting flag. Please try again later.');
        });
      }
    }
  }
  </script>
  