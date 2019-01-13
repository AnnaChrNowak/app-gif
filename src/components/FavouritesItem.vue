<template>
    <div class="container">
        <div class="row">
            <div class="col py-4">
                <div class="nav justify-content-center">
                    <div class="result p-2" :key="gif.id" v-for="(gif, key) in favourites_gifs">
                        <img :src="gif.image_url" alt="" class="img-fluid gif">
                        <button class="remove" @click="removeFavouriteGif(key)"><span class="favourite">x</span></button>
                    </div>
                </div>
            </div>

        </div>

    </div>
</template>

<script>
    import Vue from 'vue'

    export default {
        name: 'FavouritesItem',
        computed: {
            favourites_gifs() {
                return this.$store.state.favourites_gifs;
            }
        },
        methods: {
            removeFavouriteGif(key) {
                // Deleting element from favourites_gifs
                Vue.delete(this.$store.state.favourites_gifs, key);
                // Refreshing Local Storage after deleting
                localStorage.setItem(this.$store.state.LOCAL_STORAGE_KEY, JSON.stringify(this.$store.state.favourites_gifs));
            }
        }
    }
</script>

<style scoped>

    .result {
        position: relative;
        border: 1px solid rgba(190, 137, 237, .7);
        box-shadow: 0 0 10px 2px rgb(190, 137, 237);
        margin: 12px;
        transition: .5s;

    }

    .result:hover {
        border: 1px solid white;
        box-shadow: 0 0 3px 1px rgb(190, 137, 237);
        transform: scale(1.05);
    }
    .remove{
        position: absolute;
        border-radius: 50%;
        background: #ff175f;
        color: white;
        border:none;
        width: 30px;
        height: 30px;
        text-align: center;
        right: 2px;
        top:2px;
        box-shadow: 0 0 6px 3px #888888;
        transition: box-shadow 0.3s, ease-in-out;
    }

    .remove:hover {
        cursor: pointer;
    }

    .remove:focus {
        outline: none;
    }

    .remove:active {
        box-shadow: 0 2px 2px #888888;
    }

    .favourite{
        position: relative;
        font-weight: bold;
        font-size: 14px;
    }

    .gif {
        width: 200px;
        height: 200px;
    }
</style>
