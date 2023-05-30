export default {
    template:`
        <div v-for="key in blackKeys">
            <button @click="getNotes(key, $event)" class="blackKey" :class="{ 'blueKey': key.clicked }" :key="key.id"> {{ key.note }}</button>
        </div>
    `,

    data() {
        return {
            blackKeys: [
                {
                    note: 'A',
                    clicked: false,
                    id: 1
                },
                {
                    note: 'B',
                    clicked: false,
                    id: 2
                },
                {
                    note: 'C',
                    clicked: false,
                    id: 3
                },
                {
                    note: 'D',
                    clicked: false,
                    id: 4
                },
                {
                    note: 'E',
                    clicked: false,
                    id: 5
                }
            ],
            selectedKeys:[]
        }
    },

    // mounted() {
    //     axios
    //     .post('https://jsonplaceholder.typicode.com/posts', {

    //     })
    //     .then((response) => console.log(response))
    // },

    methods: {
        getNotes(key, e) {
            if(e.ctrlKey) {  //adding ctrlKey to your key provides the ability to click multiple sections using ctrl + click
                key.clicked = !key.clicked;
            } else {
                this.blackKeys.forEach(function(entry) { //this loops through all of the notes in the selectedKeys array and sets their clicked states to false. 
                    entry.clicked = false;
                });
                key.clicked = true;
            }

            const requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title: key.note, type: "black" })
            };

            fetch('../../classes/input.php', requestOptions)
                .then(response => response.json())
                .then(data => console.log(data.title))

                // .then(function (response) {
                // return response.json()
                // })

                // .then(function(data) {
                //     alert(data.note)
                // })
        }
    }
    
};

/*inspired by https://codepen.io/matthiascw/pen/LyoErW */