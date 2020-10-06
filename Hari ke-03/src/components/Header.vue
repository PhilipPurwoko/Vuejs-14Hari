<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
    export default {
        data:function() {
            return {
                title:'Welcome to my portofolio'
            };
        }
    };
</script>

<style scoped>
    header{
        text-align: center;
        background-color: cadetblue;
        color: azure;
    }
</style>