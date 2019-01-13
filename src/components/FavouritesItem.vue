<template>
    <div class="container">
        <div class="row">
            <div class="col">
                <div class="nav justify-content-center">
                    <div class="result p-2" :key="gif.id" v-for="(gif, key) in favourites_gifs">
                        <img :src="gif.image_url" alt="" class="img-fluid gif">
                        <button class="add" @click="removeFavouriteGif(key)"><span class="favourite">-</span></button>
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
                //Deleting element from favourites_gifs object
                Vue.delete(this.$store.state.favourites_gifs, key);
                //Refreshing Local Storage after deleting
                localStorage.setItem(this.$store.state.LOCAL_STORAGE_KEY, JSON.stringify(this.$store.state.favourites_gifs));
            }
        }
    }
</script>

<style scoped>

    .result {
        position: relative;
        border: 1px solid rgba(100,149,237,.7);
        box-shadow: 0px 0px 10px 2px rgba(100,149,237,1);
        margin: 12px;
        transition: .5s;

    }

    .result:hover {
        border: 1px solid white;
        box-shadow: 0px 0px 3px 1px rgba(100,149,237,1);
        transform: scale(1.05);
    }
    .add{
        position: absolute;
        border-radius: 50%;
        background: #ff573f;
        color: white;
        border:none;
        width: 30px;
        height: 30px;
        text-align: center;
        right: 2px;
        top:2px;
    }

    .add:hover {
        cursor: pointer;
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
