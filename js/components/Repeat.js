export default {
    template: `
        <div class="saveButton">
            <button @click="$emit('repeatSaved', $event)">Repeat</button>
        </div>
    `
}