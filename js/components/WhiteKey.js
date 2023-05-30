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
                    clicked: false
                },
                {
                    note: 'G',
                    clicked: false
                },
                {
                    note: 'H',
                    clicked: false
                },
                {
                    note: 'I',
                    clicked: false
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
        }
    }
    
};