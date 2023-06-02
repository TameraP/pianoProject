export default {
    template: `
        <audio controls autoplay>
            <source :src="sound" type="audio/mpeg">
        </audio>
        <img :src="image.path" :style="{ width: image.width + 'px' }"/> 
    `,


    data () {
        return {
            image: {
                path: "",
                width: "200"
            },
            sound:""
        }
    },

    async mounted () {
        fetch('/js/components/ReturnedKey.js')
        .then(response => response.json())
        .then(data => {
            this.image.path = data.image;
            this.sound = data.sound;
        })
        .catch(err => {
            console.log(err);
        })
    }
};