import BlackKey from "./BlackKey.js";
import WhiteKey from "./WhiteKey.js";
import Play from "./Play.js";
import Notes from "./Notes.js";
import Save from "./Save.js";
import Repeat from "./Repeat.js";
export default {
    components: { BlackKey, WhiteKey, Play, Notes, Save, Repeat},
    template: `

    <div class="blackKeyContainer">
        <black-key @choose-notes="getNotes"></black-key>
    </div>
    <white-key @choose-notes="getNotes" class="whiteKeyContainer"></white-key>
    <save @start-saving="savedNotesFun"></save> <repeat @repeat-saved="startSaved"></repeat>
    <play :sound="sound"></play>
    <div class="notesBox">
        <notes :image="image"></notes>
    </div>
    <div id="outRepeatImg"></div>
    `,


    data () {
        return {
            image: {
                path: "",
                width: "200"
            },
            sound:"",
            startSaving: false,
            saveNotes: [],
            playSaved: [],
            newKey: []
        }
    },

    methods: {
        getNotes(key, keyArray, e) {
            this.newKey.push(key);
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
                    if(this.startSaving) {
                        this.saveNotes.push(data);
                        // console.log(this.saveNotes);
                    }
                })
                this.image.path = "";
                this.sound = "";
        },

        savedNotesFun() {
            this.startSaving = true;
        },

        startSaved() {
            this.image = "";
            for(let i = 0; i < this.saveNotes.length; i++) {
                this.playSaved.push("<iframe src='" + this.saveNotes[i].sound + "' allow='autoplay' style='display:none'></iframe>");
                this.playSaved.push("<div><img src='" + this.saveNotes[i].image + "' style='{ width: 100px }'/>" + this.newKey[i].note + "</div>"); 
            }
            for(let x = 0; x < this.playSaved.length; x++) {
                document.getElementById("outRepeatImg").innerHTML += this.playSaved[x];
            }
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

