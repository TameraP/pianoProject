import BlackKey from "./BlackKey.js";
import WhiteKey from "./WhiteKey.js";
import Play from "./Play.js";
import Notes from "./Notes.js";
import Save from "./Save.js";
import Repeat from "./Repeat.js";
import Delete from "./Delete.js";

export default {
    components: { BlackKey, WhiteKey, Play, Notes, Save, Repeat, Delete },
    template: `

    <div class="blackKeyContainer">
        <black-key @choose-notes="getNotes"></black-key>
    </div>

    <div class="whiteKeyContainer">
        <white-key @choose-notes="getNotes"></white-key>
    </div>

    <div class="pianoButtons">
        <save @start-saving="savedNotesFun"></save> 
        <repeat @repeat-saved="startSaved"></repeat> 
        <delete @delete-saved="deleteSaved"></delete>
    </div>

    <play :sound="sound"></play>

    <div class="notesBox">
        <notes :image="image"></notes>
    </div>

    <div id="outRepeatImg"></div>

    <div id="outRepeatSound"></div>
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
            showSaved:[],
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

            fetch('./classes/input.php', requestOptions)
                .then(response => response.json())
                .then(data => {
                    this.image.path = data.image;
                    console.log(data.image);
                    this.sound = data.sound;
                    if(this.startSaving) {
                        // alert("yes");
                        this.saveNotes.push(data);
                        console.log(this.saveNotes);
                        //this.startSaving = "";
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
                this.showSaved.push("<div><img src='" + this.saveNotes[i].image + "' style='{ width: 100px }'/>" + this.newKey[i].note + "</div>"); 
            }

            for(let x = 0; x < this.playSaved.length; x++) {
                play(this.playSaved, x);
                show(this.showSaved, x);
            }

            function play(savedArr, x) {
                setTimeout(function() {
                    document.getElementById("outRepeatSound").innerHTML = savedArr[x];
                }, 700 * x);
            }

            function show(savedArr, x) {
                setTimeout(function() {
                    document.getElementById("outRepeatImg").innerHTML += savedArr[x];
                }, 700 * x);
            }
            // if(x++ < this.playSaved.length) {
            //     document.getElementById("outRepeatImg").innerHTML += this.playSaved[x];
            //     setTimeout(go, 2000);
            // }
        //}

        },

        deleteSaved() {
            window.location.reload();
        },

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

