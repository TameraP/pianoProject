export default {
    template:`
        <div>
            <button @click="blueKey('a')" :class="{
                'blackKey' : true,
                'blueKey' : colora === 'blueKey'
            }">A</button>
            <button @click="blueKey('b')" :class="{
                'blackKey' : true,
                'blueKey' : colorb === 'blueKey'
            }">B</button>
            <button @click="blueKey('c')" :class="{
                'blackKey' : true,
                'blueKey' : colorc === 'blueKey'
            }">C</button>
            <button @click="blueKey('d')" :class="{
                'blackKey' : true,
                'blueKey' : colord === 'blueKey'
            }">D</button>
            <button @click="blueKey('e')" :class="{
                'blackKey' : true,
                'blueKey' : colore === 'blueKey'
            }">E</button>
        </div>
    `,

    data() {
        return {
            colora: { type: String, default: 'blackKey' },
            colorb: { type: String, default: 'blackKey' },
            colorc: { type: String, default: 'blackKey' },
            colord: { type: String, default: 'blackKey' },
            colore: { type: String, default: 'blackKey' }
        }
    },

    methods: {
        blueKey(letter) {
            var newColor = 'color' + letter;
            switch(newColor) {
                case 'colora':
                    this.colora = 'blueKey';
                    break;
                case 'colorb':
                    this.colorb = 'blueKey';
                    break;
                case 'colorc':
                    this.colorc = 'blueKey';
                    break;
                case 'colord':
                    this.colord = 'blueKey';
                    break;
                case 'colore':
                    this.colore = 'blueKey';
                    break;

            }
        }
    }
    
}