<template>
    <section class="main-form">
        <fieldset>
            <legend>Saran & Masukan</legend>
            <p v-if="msgSent">Message sent</p>
            <section v-else>
                <label for="name">Your name</label>
                <input type="text" name="name" v-bind:placeholder="username">
                <label for="message">Message</label>
                <textarea name="message">{{ message }}</textarea>
                <button @click.once="submit">Kirim</button>
            </section>
        </fieldset>
    </section>
</template>

<script>
    import { bus } from '../main';
    export default {
        props:['username'],
        data:function() {
            return {
                message:'Hello world',
                msgSent:false,
            };
        },
        methods:{
            submit:function(){
                bus.$emit('msgSubmitted',this.message);
                console.log(this.message);
            }
        },
        created:function(){
            bus.$on('msgSubmitted',(msg)=>{
                if (msg != ''){
                    this.msgSent = true;
                };
            });
        }
    };
</script>

<style scoped>
    .main-form{
        margin: auto;
        width: 30%;
    }
    input, textarea{
        width: 100%;
    }
    textarea{
        height: 50px;
    }
    button{
        width: 100%;
    }
</style>