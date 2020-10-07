<template>
    <section>
        <h2>Identitas</h2>
        <table>
            <tr>
                <td>Nama</td>
                <td>: {{ nama }}</td>
            </tr>
            <tr>
                <td>Kebangsaan</td>
                <td>: {{ kebangsaan }}</td>
            </tr>
            <tr>
                <td>Jenis Kelamin</td>
                <td>: {{ jenisKelamin }}</td>
            </tr>
            <tr>
                <td>Hobi</td>
                <td>: {{ hobi }}</td>
            </tr>
            <tr>
                <td>Website</td>
                <td>: <a target="_blank" v-bind:href="website.url">{{ website.name }}</a></td>
            </tr>
        </table>
    </section>
</template>

<script>
    export default {
        props:['identitas'],
        data:function() {
            return {
                nama:'Philip Purwoko',
                kebangsaan:'Indonesia',
                jenisKelamin:'Pria',
                hobi:'Teknologi',
                website:{name:'GitHub',url:'https://github.com/PhilipPurwoko'}
            };
        }
    };
</script>

<style scoped>
    table{
        width: 500px;
        margin: auto;
        background-color:cornsilk;
        padding: 10px;
        border-radius: 5px;
    }
    td{
        width: 50%;
    }
    h2{
        text-align: center;
    }
</style>