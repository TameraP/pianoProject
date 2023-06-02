export default {
    template:`
        <div v-for="key in blackKeys">
            <button @click="$emit('chooseNotes', key, blackKeys, $event)" class="blackKey" :class="{ 'blueKey': key.clicked }" :key="key.id"> {{ key.note }}</button>
        </div>
    `,

    data() {
        return {
            blackKeys: [
                {
                    note: 'A',
                    color:'black',
                    clicked: false,
                    id: 1
                },
                {
                    note: 'B',
                    color:'black',
                    clicked: false,
                    id: 2
                },
                {
                    note: 'C',
                    color:'black',
                    clicked: false,
                    id: 3
                },
                {
                    note: 'D',
                    color:'black',
                    clicked: false,
                    id: 4
                },
                {
                    note: 'E',
                    color:'black',
                    clicked: false,
                    id: 5
                }
            ]
        }
    },

    // mounted() {
    //     axios
    //     .post('https://jsonplaceholder.typicode.com/posts', {

    //     })
    //     .then((response) => console.log(response))
    // },

    methods: {
    //    async getNotes(key, e) {
    //         if(e.ctrlKey) {  //adding ctrlKey to your key provides the ability to click multiple sections using ctrl + click
    //             key.clicked = !key.clicked;
    //         } else {
    //             this.blackKeys.forEach(function(entry) { //this loops through all of the notes in the selectedKeys array and sets their clicked states to false. 
    //                 entry.clicked = false;
    //             });
    //             key.clicked = true;
    //         }

    //         const requestOptions = {
    //             method: "POST",
    //             headers: { "Content-Type": "application/json" },
    //             body: JSON.stringify({ note: key.note, type: "black" })
    //         };

    //         fetch('../../classes/input.php', requestOptions)
    //             .then(response => response.json())
    //             .then(data => console.log(data))
    //     }

        // getNotes(key, color, e) {
        //     this.$emit(key, color, e);
        // }
    }
    
};

/*inspired by https://codepen.io/matthiascw/pen/LyoErW */