<template>
    <footer>
        <p><i>{{ copyright }}</i></p>
    </footer>
</template>

<script>
    export default {
        data:function() {
            return {
                copyright:'@copyright Philip Purwoko'
            };
        }
    };
</script>

<style scoped>
    footer{
        text-align: center;
        background-color:azure;
        color: cadetblue;
    }
</style>