export default {
    template: `
        <div class="saveButton">
            <button @click="$emit('startSaving', $event)"> Save </button>
        </div>
    `,

}