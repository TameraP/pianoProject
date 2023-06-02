import BlackKey from "./BlackKey.js";
import WhiteKey from "./WhiteKey.js";
import Play from "./Play.js";
import Notes from "./Notes.js";

export default {
    components: { BlackKey, WhiteKey, Play, Notes },
    template: `

    <div class="blackKeyContainer">
        <black-key @choose-notes="getNotes"></black-key>
    </div>
    <white-key @choose-notes="getNotes" class="whiteKeyContainer"></white-key>
    <play :sound="sound"></play>
    <div class="notesBox">
        <notes :image="image"></notes>
    </div>
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
                .then(data => {
                    this.image.path = data.image;
                    this.sound = data.sound;
                   // console.log(this.sound);
                })
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

