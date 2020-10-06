<template>
    <main>
        <app-header></app-header>
        <identitas></identitas>
        <impression></impression>
        <sertifikasi></sertifikasi>
        <app-footer></app-footer>
    </main>
</template>

<script>
import Header from "./components/Header.vue"
import Footer from "./components/Footer.vue"
import Identitas from './components/Identitas.vue'
import Sertifikasi from './components/Sertifikasi.vue'
import Impression from './components/Impression.vue'

export default {
    components:{
        'app-header':Header,
        'app-footer':Footer,
        'identitas':Identitas,
        'sertifikasi':Sertifikasi,
        'impression':Impression
    },
    data:function() {
        return {

        };
    }
};
</script>

<style scoped>

</style>>
