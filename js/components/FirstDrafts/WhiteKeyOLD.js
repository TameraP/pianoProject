export default {
    template:`
        <div>
            <button @click="blueKey('f')" :class="{
                'whiteKey' : true,
                'blueKey2' : colorf === 'blueKey'
            }">f</button>
            <button @click="blueKey('g')" :class="{
                'whiteKey' : true,
                'blueKey2' : colorg === 'blueKey'
            }">g</button>
            <button @click="blueKey('h')" :class="{
                'whiteKey' : true,
                'blueKey2' : colorh === 'blueKey'
            }">h</button>
            <button @click="blueKey('i')" :class="{
                'whiteKey' : true,
                'blueKey2' : colori === 'blueKey'
            }">i</button>
        </div>
    `,

    data() {
        return {
            colorf: { type: String, default: 'whiteKey' },
            colorg: { type: String, default: 'whiteKey' },
            colorh: { type: String, default: 'whiteKey' },
            colori: { type: String, default: 'whiteKey' },
        }
    },

    methods: {
        blueKey(letter) {
            var newColor = 'color' + letter;
            switch(newColor) {
                case 'colorf':
                    this.colorf = 'blueKey';
                    break;
                case 'colorg':
                    this.colorg = 'blueKey';
                    break;
                case 'colorh':
                    this.colorh = 'blueKey';
                    break;
                case 'colori':
                    this.colori = 'blueKey';
                    break;
            }
        }
    }
    
}