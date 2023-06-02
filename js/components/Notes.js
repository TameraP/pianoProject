export default {
    template: `
        <img :src="image.path" :style="{ width: image.width + 'px' }"/> 
    `,

    props: ['image'],

    data() {
        return {
          
        }
    }
}