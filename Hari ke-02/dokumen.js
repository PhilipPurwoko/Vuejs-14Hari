new Vue({
    el:'#profile',
    data:{
        name:'Philip Purwoko',
        about:'Learning to code, code for learning',
        website: {display:'Github',link:'https://github.com/PhilipPurwoko'},
        claps: Math.floor(Math.random() * 100),
        following:false,
        followers: Math.floor(Math.random() * 100),
        tools:[
            {name:'Python',version:'3.8.0',level:'Expert'},
            {name:'NodeJS',version:'13.12.0',level:'Expert'},
            {name:'Tensorflow',version:'2.1.0',level:'Expert'},
            {name:'Postgres',version:'4.0.0',level:'Expert'},
            {name:'VueJS',version:'3.0.0',level:'Expert'},
        ]
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
});