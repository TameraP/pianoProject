import Key from "./Key.js";

export default {
    components: { Key },
    template: `
        <section class="keyboard">
            <key></key>
        </section>
    `,

    data() {
        return {
            selectedKeys:[]
        }
    }

        // if(e.ctrlKey) {  //adding ctrlKey to your key provides the ability to click multiple sections using ctrl + click
        //     key.clicked = !key.clicked;
        // } else {
        //     this.blackKeys.forEach(function(entry) { //this loops through all of the notes in the selectedKeys array and sets their clicked states to false. 
        //         entry.clicked = false;
        //     });
        //     key.clicked = true;
        // }

        // const requestOptions = {
        //     method: "POST",
        //     headers: { "Content-Type": "application/json" },
        //     body: JSON.stringify({ note: key.note, type: color })
        // };

        // fetch('../../classes/input.php', requestOptions)
        //     .then(response => response.json())
        //     .then(data => console.log(data))
}