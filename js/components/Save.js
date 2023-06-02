export default {
    template: `
        <div class="saveButton">
            Save:
            <input type="checkbox" id="saveCheckbox" @click="$emit('startSaving', $event)">
        </div>
    `,

    data() {
        return {
        }
    }
}