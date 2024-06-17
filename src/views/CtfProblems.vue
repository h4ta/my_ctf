<template>
    <div>
      <Header />
      <main>
        <section id="problems">
          <h2>Problems</h2>
          <div id="problem-list">
            <div v-for="problem in problems" :key="problem.id">
              <h3>{{ problem.title }}</h3>
              <p>{{ problem.description }}</p>
              <p>Points: {{ problem.points }}</p>
              <button @click="startChallenge(problem.url)">Start Challenge</button>
              <input type="text" v-model="answers[problem.id]" placeholder="Enter your flag">
              <button @click="submitAnswer(problem.id)">Submit Answer</button>
              <br>
              <br>
              <br>
              <br>
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
        problems: [],
        answers: {}
      }
    },
    created() {
      fetch('http://localhost:3000/api/problems')
        .then(response => response.json())
        .then(data => {
          this.problems = data;
        });
    },
    methods: {
      startChallenge(url) {
        window.location.href = url;
      },
      submitAnswer(problemId) {
        const answer = this.answers[problemId];
        fetch('http://localhost:3000/api/problems', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Origin': 'http://localhost:8080'
          },
          body: JSON.stringify({ problemId, answer })
        })
        .then(response => response.json())
        .then(data => {
          if (data.correct) {
            alert('Correct answer!');
          }
          else {
            alert('Incorrect answer');
          }
        })
        .catch(error => {
          console.error('Error: ', error);
        })
      }
    }
  }
</script>

<style>
main {
  margin: 20px;
}
form {
  margin: 10px 0;
}
form label {
  display: block;
  margin: 5px 0;
}
</style>