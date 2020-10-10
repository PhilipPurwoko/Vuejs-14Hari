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
            <template v-for="jasa in semuaJasa">
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
            <p>{{ instagram.username }}</p>
            <button v-if="following == false"><a @click.once="follow" v-bind:href="instagram.link" v-bind:target="instagram.target">Follow Sekarang</a></button>
            <p v-else>Followed</p>
        </div>
    </section>
</template>

<script>
    export default {
        data:function(){
            return {
                following:false,
            }
        },
        computed:{
            semuaJasa(){
                return this.$store.getters.getJasa;
            },
            jasaDiskon(){
                return this.$store.getters.getJasa.filter(jasa=>jasa.diskon);
            },
            instagram(){
                return this.$store.getters.getInsta;
            }
        },
        methods:{
            follow(){
                this.following = true;
                this.$store.dispatch('applyDiskon');
            }
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