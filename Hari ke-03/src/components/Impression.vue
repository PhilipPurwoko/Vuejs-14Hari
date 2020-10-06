<template>
    <section>
        <span>{{ claps }} Claps </span><button @click="clap">Clap</button>
        <span>{{ followers }} Followers </span>
        <button @click="follow" v-bind:class="folComp" v-if="!following">Follow</button>
        <button @click="follow" v-bind:class="folComp" v-else-if="following">Following</button>
    </section>
</template>

<script>
    export default {
        data:function() {
            return {
                claps: Math.floor(Math.random() * 100),
                following:false,
                followers: Math.floor(Math.random() * 100),
            };
        },
        methods:{
            clap: function(){
            this.claps++;
            },
            follow:function(){
                this.following = !this.following;
                if (this.following){
                    this.followers++;
                } else {
                    this.followers--;
                }
            }
        },
        computed:{
            folComp:function(){
                return {following:this.following}
            }
        }
    };
</script>

<style scoped>
    section{
        text-align: center;
        margin: 10px;
    }
    .following{
        background-color: lightblue;
    }
</style>