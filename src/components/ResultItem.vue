<template>
    <div class="container">
        <div class="row">
            <div class="col py-4">
                <div class="nav justify-content-center">
                    <div class="result p-2" :key="gif.id" v-for="(gif, key) in $store.state.searched_gifs">
                        <img :src="gif.image_url" alt="" class="img-fluid gif">
                        <button class="add" @click="addFavouriteGif(gif, key)"><span class="favourite">+</span></button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'ResultItem',
        computed: {
            searched_gifs() {
                return this.$store.state.searched_gifs;
            }
        },
        // Loading favourite_gifs from local storage
        created() {
            this.$store.state.favourites_gifs = JSON.parse(localStorage.getItem(this.$store.state.LOCAL_STORAGE_KEY) || '{}')
        },
        methods: {
            addFavouriteGif(gif, key) {
                // Adding favourite_gif to favourite_gifs and bind them
                Vue.set(this.$store.state.favourites_gifs, key, gif)

                // Setting Local Storage
                localStorage.setItem(this.$store.state.LOCAL_STORAGE_KEY, JSON.stringify(this.$store.state.favourites_gifs))
            }
        },
    }
</script>

<style scoped>
    .result {
        position: relative;
        border: 1px solid rgba(100,149,237,.7);
        box-shadow: 0 0 10px 2px rgba(100,149,237,1);
        margin: 12px;
        transition: .5s;
    }

    .result:hover {
        border: 1px solid white;
        box-shadow: 0 0 3px 1px rgba(100,149,237,1);
        transform: scale(1.05);
    }
    .add{
        position: absolute;
        border-radius: 50%;
        background: #006dff;
        color: white;
        border:none;
        width: 30px;
        height: 30px;
        text-align: center;
        right: 4px;
        top: 4px;
        box-shadow: 0 0 6px 3px #888888;
        transition: box-shadow 0.3s, ease-in-out;
    }

    .add:hover {
        cursor: pointer;
    }

    .add:focus {
        outline: none;
    }

    .add:active {
        box-shadow: 0 2px 2px #888888;
    }

    .favourite{
        position: relative;
        font-weight: bold;
        font-size: 20px;
    }

    .gif {
        width: 200px;
        height: 200px;
    }
</style>
