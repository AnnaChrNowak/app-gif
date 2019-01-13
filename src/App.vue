<template>
  <div id="app" >
    <h2>GIF searching</h2>
    <SearchForm />
    <Results />
    <Favourites />
  </div>
</template>

<script>
import SearchForm from './components/SearchForm.vue'
import Results from './components/Results'
import Favourites from "./components/Favourites";

export default {
  name: 'app',
  components: {
    Favourites,
    SearchForm,
    Results
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
  text-align: center;
  margin-top: 60px;
  margin-left: auto;
  margin-right: auto;
}
</style>
