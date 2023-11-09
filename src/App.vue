<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link :to="{ name: 'About' }">About</router-link> |
    <router-link :to="{ name: 'Jobs' }">Jobs</router-link>
  </nav>

  <button class="event" @click="redirect">Redirect</button>
  <button class="event" @click="back">Go Back</button>
  <button class="event" @click="forward">Go Forward</button>
  <router-view/>
</template>

<script>
export default {
  methods: {
    redirect() {
      this.$router.push({ name: 'Home' });
    },
    back() {
      this.$router.go(-1);
    },
    forward() {
      this.$router.go(+1);
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;
  padding: 10px 15px;
  border-radius: 15px;
}

nav a.router-link-exact-active {
  color: #FFF;
  background-color: crimson;
}

.event { margin: 0 10px; padding: 15px; border: none; border-radius: 10px; }
.event:hover { cursor: pointer; }
</style>
