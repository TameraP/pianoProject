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
}