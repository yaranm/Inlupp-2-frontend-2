new Vue({
    el: '#app',
    data: {
        posts: [],
    },
    methods: {
        addToLS: function (embedURL) {
            
            localStorage.setItem("embed",embedURL);
        }
      },
     mounted: function() {
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.posts = data
        })
    },
    computed:{
        getEmbed(){
            return localStorage.getItem("embed");
        }
    },
   
    
    

})