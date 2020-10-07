<template>
    <section class="main-section">
        <h2>Sertifikasi</h2>
        <section class="card-container">
            <template v-for="sertifikat in sertifikasi">
                <article class="card">
                    <p><strong>{{ sertifikat.nama }}</strong> <i>v{{ sertifikat.tanggal }}</i></p>
                    <p>Tingkat {{ sertifikat.tingkatan }}</p>
                </article>
            </template>
        </section>
    </section>
</template>

<script>
    export default {
        data:function() {
            return {
                sertifikasi:[
                    {nama:'Python',tanggal:'14-2-2004',tingkatan:'Nasional'},
                    {nama:'NodeJS',tanggal:'14-2-2004',tingkatan:'Nasional'},
                    {nama:'Tensorflow',tanggal:'14-2-2004',tingkatan:'Nasional'},
                    {nama:'Postgres',tanggal:'14-2-2004',tingkatan:'Nasional'},
                    {nama:'VueJS',tanggal:'14-2-2004',tingkatan:'Nasional'},
                ]
            };
        }
    };
</script>

<style scoped>
    .card-container{
        display:flex;
        flex-wrap: wrap;
    }
    .main-section{
        text-align: center;
    }
    .card{
        margin: 10px;
        border: 1px solid black;
        padding: 10px;
    }
</style>