export default {
    template: `
        <div class="saveButton">
            <button @click="$emit('deleteSaved', $event)">Refresh </button>
        </div>
    `,

}