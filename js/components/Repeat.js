export default {
    template: `
        <div class="saveButton">
            Repeat:
            <input type="checkbox" id="repeatCheckbox" @click="$emit('repeatSaved', $event)">
        </div>
    `
}