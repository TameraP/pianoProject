export default {
    template: `
        <iframe :src="sound" allow="autoplay" style="display:none"></iframe>
    `,

    props: ['sound'],

    data() {
        return {
          
        }
    }
}