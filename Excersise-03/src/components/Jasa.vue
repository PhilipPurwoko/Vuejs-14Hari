<template>
    <section>
        <h2>Jasa</h2>
        <section class="card-container">
            <h3>Sedang Diskon</h3>
            <template v-for="jasa in jasaDiskon">
                <article class="card">
                    <p><strong>{{ jasa.nama }}</strong></p>
                    <p>IDR {{ jasa.harga }}</p>
                    <button class="card-button">Beli Jasa</button>
                </article>
            </template>
        </section>
        <section class="card-container">
            <h3>Semua Jasa</h3>
            <template v-for="jasa in getJasa">
                <article class="card">
                    <p><strong>{{ jasa.nama }}</strong></p>
                    <p>IDR {{ jasa.harga }}</p>
                    <button class="card-button">Beli Jasa</button>
                </article>
            </template>
        </section>
        <div>
            <h3>Promo</h3>
            <p>Follow saya di instagram dapatkan diskon 20%</p>
            <p>{{ getInsta.username }}</p>
            <button><a @click="applyDiskon" v-bind:href="getInsta.link" v-bind:target="getInsta.target">Follow Sekarang</a></button>
        </div>
    </section>
</template>

<script>
    import { mapActions } from 'vuex';
    import { mapGetters } from 'vuex';

    export default {
        computed:{
            ...mapGetters([
                'getJasa',
                'getInsta'
            ]),
            jasaDiskon(){
                return this.$store.getters.getJasa.filter(jasa=>jasa.diskon);
            }
        },
        methods:{
            ...mapActions([
                'applyDiskon'
            ])
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
    .card-button {
        width: 100%;
    }
    a{
        text-decoration: none;
    }
</style>