import BlackKey from "./BlackKey.js";
import WhiteKey from "./WhiteKey.js";

export default {
    components: { BlackKey, WhiteKey },
    template: `
        <section class="keyboard">
            <div class="blackKeyContainer">
                <black-key></black-key>
            </div>
            <white-key class="whiteKeyContainer"></white-key>
        </section>
    `
}