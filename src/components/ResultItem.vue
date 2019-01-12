<template>
    <div class="container">
        <div class="row">
            <div class="col py-4">
                <div class="nav justify-content-center">
                    <div class="result p-2" v-bind:key="gif.id" v-for="(gif, key) in serched_gifs">
                        <img :src="gif.image" alt="" class="img-fluid gif">
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
            serched_gifs() {
                return this.$store.state.serched_gifs;
            }
        },
        created() {
            this.$store.state.favourites_gifs = JSON.parse(localStorage.getItem(this.$store.state.store_key) || '{}')
        },

        methods: {
            addFavouriteGif(gif, key) {

                Vue.set(this.$store.state.favourites_gifs, key, gif)

                localStorage.setItem(this.$store.state.store_key, JSON.stringify(this.$store.state.favourites_gifs))
            }
        },

        data() {
            return {

            }
        },
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
        background: deeppink;
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
