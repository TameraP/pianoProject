import BlackKey from "./BlackKey.js";
import WhiteKey from "./WhiteKey.js";

export default {
    components: { BlackKey, WhiteKey },
    template: `

    <div class="blackKeyContainer">
        <black-key @choose-notes="getNotes"></black-key>
    </div>
    <white-key class="whiteKeyContainer"></white-key>
    `,


    data () {
        return {
            image: {
                path: "",
                width: "200"
            },
            sound:"",
            selectedKeys: []
        }
    },

    methods: {
        getNotes(key, keyArray, e) {
           if(e.ctrlKey) {  //adding ctrlKey to your key provides the ability to click multiple sections using ctrl + click
                key.clicked = !key.clicked;
            } else {
                for(let i=0; i < keyArray.length; i++) {
                    keyArray[i].clicked = false;
                };
                key.clicked = true;
            }
            

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ note: key.note, type: key.color })
            };

            fetch('../../classes/input.php', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }
    // async mounted () {
    //     fetch('/js/components/ReturnedKey.js')
    //     .then(response => response.json())
    //     .then(data => {
    //         this.image.path = data.image;
    //         this.sound = data.sound;
    //     })
    //     .catch(err => {
    //         console.log(err);
    //     })
    // }
};

    // <audio controls autoplay>
    //     <source :src="sound" type="audio/mpeg">
    // </audio>
    // <img :src="image.path" :style="{ width: image.width + 'px' }"/> 