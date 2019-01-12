<template>
    <div class="container pt-4">
        <h4>Results : </h4>
        <div class="row col results-content mx-auto">
            <ResultItem />
        </div>

    </div>
</template>

<script>
    import ResultItem from './ResultItem'

    export default {
        name: 'Results',
        components: { ResultItem
        },
        pops: {},
        date: {},
        data() {
            return {

            }
        },
    }
</script>

<style scoped>
    .results-content {
        border: 2px dashed #252525;
        min-height: 300px;

    }

</style>
