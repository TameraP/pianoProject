export default {
    template:`
        <div v-for="key in blackKeys">
            <button @click="toggleItem(key, $event)" class="blackKey" :class="{ 'blueKey': key.clicked }"> {{ key.note }}</button>
        </div>
    `,

    data() {
        return {
            blackKeys: [
                {
                    note: 'A',
                    clicked: false
                },
                {
                    note: 'B',
                    clicked: false
                },
                {
                    note: 'C',
                    clicked: false
                },
                {
                    note: 'D',
                    clicked: false
                },
                {
                    note: 'E',
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
                this.blackKeys.forEach(function(entry) { //this loops through all of the notes in the selectedKeys array and sets their clicked states to false. 
                    entry.clicked = false;
                });
                key.clicked = true;
            }
        }
    }
    
};