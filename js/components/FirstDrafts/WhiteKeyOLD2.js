export default {
    template:`
        <div>
            <div v-for="key in whiteKeys">
                <button @click="toggleItem(key, $event)" class="whiteKey" :class="{ 'blueKey': key.clicked }"> {{ key.note }}</button>
            </div>
        </div>
    `,
    data() {
        return {
            whiteKeys: [
                {
                    note: 'F',
                    clicked: false,
                    id: 6
                },
                {
                    note: 'G',
                    clicked: false,
                    id: 7
                },
                {
                    note: 'H',
                    clicked: false,
                    id: 8
                },
                {
                    note: 'I',
                    clicked: false,
                    id: 9
                }
            ],
            selectedKeys:[]
        }
    },

    methods: {
        toggleItem(key, e) {
            if(e.ctrlKey) {  //adding ctrlKey to your key provides the ability to click multiple sections using ctrl + click
                key.clicked = !key.clicked;
            } else {
                this.whiteKeys.forEach(function(entry) { //this loops through all of the notes in the selectedKeys array and sets their clicked states to false. 
                    entry.clicked = false;
                });
                key.clicked = true;
            }

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ note: key.note, type: "white" })
            };

            fetch('../../classes/input.php', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data))
        }
    }
    
};

/*inspired by https://codepen.io/matthiascw/pen/LyoErW */