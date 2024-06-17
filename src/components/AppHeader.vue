<template>
    <header>
      <h1>CTF Site</h1>
      <nav>
        <ul>
          <li><router-link to="/">Home</router-link></li>
          <li><router-link to="/problems">Problems</router-link></li>
          <li><router-link to="/scoreboard">Scoreboard</router-link></li>
        </ul>
      </nav>
    </header>
  </template>
  
  <style>
  header {
    background-color: #4be55a;
    color: #fff;
    padding: 1em;
  }
  nav ul {
    list-style-type: none;
  }
  nav ul li {
    display: inline;
    margin-right: 1em;
  }
  </style>
  