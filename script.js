new Vue({
    el: '#app',
    data: {
        posts: [],
    },
     mounted: function() {
        fetch('https://www.scorebat.com/video-api/v1/')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            this.posts = data
        })
    }
})