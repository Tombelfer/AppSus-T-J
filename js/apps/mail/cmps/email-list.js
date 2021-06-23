import emailPreview from "./email-preview.js"
export default {
    props: ['emails'],
    template: `
    <ul class="car-list">
        <li v-for= "email in emails">
            <emailPreview :email=email></emailPreview>
        </li>
    </ul>
    `,
    components:{
        emailPreview
    }
}