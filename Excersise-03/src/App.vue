<template>
    <main>
        <app-header></app-header>
        <identitas></identitas>
        <impression></impression>
        <sertifikasi></sertifikasi>
        <divider></divider>
        <pesan v-bind:username="username"></pesan>
        <app-footer></app-footer>
    </main>
</template>

<script>

import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Identitas from './components/Identitas.vue'
import Sertifikasi from './components/Sertifikasi.vue'
import Impression from './components/Impression.vue'
import Pesan from './components/Pesan.vue'
import Divider from './components/Divider.vue'

export default {
    components:{
        'app-header':Header,
        'app-footer':Footer,
        'identitas':Identitas,
        'sertifikasi':Sertifikasi,
        'impression':Impression,
        'pesan':Pesan,
        'divider':Divider
    },
    data:function() {
        return {
            username:'Philip'
        };
    }
};
</script>

<style scoped>

</style>>
