<template>
    <div>
      <main>
        <h2> {{  challengeTitle  }} </h2> <!-- Challenge IDを表示 -->
        <form @submit.prevent="submitLogin">
          <label for="username">Username:</label>
          <input type="text" v-model="username" id="username" required>
          <br>
          <label for="password">Password:</label>
          <input type="password" v-model="password" id="password" required>
          <br>
          <button type="submit">Login</button>
        </form>
        <p>{{ message }}</p>
      </main>
    </div>
</template>
  
<script>
  export default {
    data() {
      return {
        username: '',
        password: '',
        message: '',
        challengeId: this.$route.params.id // パスパラメータを取得
      };
    },
    methods: {
      submitLogin() {
        // ここでSQLインジェクションを試す
        if (this.username === 'admin' && this.password === 'password' || this.username.includes('\' OR \'1\'=\'1')) {
          this.message = 'Login successful! Here is your flag: FLAG{example_flag_' + this.challengeId + '}';
        } else {
          this.message = 'Invalid credentials!';
        }
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
  