<template>
    <section>
        <h2>Jasa</h2>
        <section class="card-container">
            <template v-for="jasa in semuaJasa">
                <article class="card">
                    <p><strong>{{ jasa.nama }}</strong></p>
                    <p>IDR {{ jasa.harga }}</p>
                </article>
            </template>
        </section>
    </section>
</template>

<script>
    export default {
        computed:{
            semuaJasa(){
                return this.$store.getters.getJasa;
            },
        }
    };
</script>

<style scoped>
    .card-container{
        display:flex;
        flex-wrap: wrap;
    }
    .card{
        margin: 10px;
        border: 1px solid black;
        padding: 10px;
        text-align: center;
    }
</style>