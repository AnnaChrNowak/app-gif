<template>
  <div class="search-form container">
    <div class="row">
      <div class="col-4"></div>
      <div class="col-4">

        <form class="form-inline">
          <div class="form-group mb-2">
            <label for="search-gif" class="pr-2">Type a name...</label>
            <input type="text" class="form-control" id="search-gif" v-model="searched_phrase" placeholder="Searched Phrase">
          </div>
          <div class="form-group">
            <label for="limit" class="pr-2">Set limit of serched gifs</label>
            <input type="number" class="form-control limit-gifs" id="limit" v-model="search_limit" placeholder="limit" min="1">
          </div>
        </form>
        <button type="button" @click="searchGifs(searched_phrase, search_limit)" class="btn btn-primary mt-4">Search</button>
      </div>
      <div class="col-4"></div>
    </div>

  </div>
</template>

<script>
  import axios from 'axios'
  import Vue from 'vue'

  export default {
    name: 'SearchForm',
    data() {
      return {
        searched_phrase: '',
        search_limit: 4
      }

    },
    methods: {
      searchGifs(searched_phrase, search_limit){
        // Reset searched_gifs
        this.$store.state.searched_gifs = {};

        // Get gifs from the giph server
        axios.get("http://api.giphy.com/v1/gifs/search?q=" + searched_phrase +
                "&api_key=" + this.$store.state.API_KEY +
                "&limit=" + search_limit)

                .then(res => {
                    let gifs = res.data.data;
                    if(gifs.length === 0) {
                      alert('There is no gifs you looking for, try again')
                      this.searched_phrase = ''
                    } else {
                      this.displayGifs(gifs);
                    }
                  })
                .catch(err => alert(err));
      },

      // Populate searched_gifs
      displayGifs(gifs) {
        for(let i = 0; i< gifs.length; i++) {
          let url = gifs[i].images.fixed_height.url;
          let key = gifs[i].id;
          Vue.set(this.$store.state.searched_gifs, key, {image_url: url})
        }
      },
    }
  }
</script>

<style scoped>
  .limit-gifs {
    max-width: 100px;
    text-align: center;
  }
</style>
