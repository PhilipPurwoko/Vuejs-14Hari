new Vue({
    el:'#profile',
    data:{
        name:'Philip Purwoko',
        about:'Learning to code, code for learning',
        website: {display:'Github',link:'https://github.com/PhilipPurwoko'},
        claps: 0,
        followingStatus:false,
        followers: Math.floor(Math.random() * 100)
    },
    methods:{
        clap: function(){
            this.claps++;
        },
        follow:function(){
            this.followingStatus = true;
            this.followers++;
        }
    }
});