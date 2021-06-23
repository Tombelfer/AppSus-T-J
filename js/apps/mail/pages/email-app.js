import { emailService } from "../services/email-service.js"
import emailPreview from "../cmps/email-preview.js"

export default {
    template: `
        <section class="">
            <div >{{this.emails}}</div>
            emails
            <li v-for="email in emails">
                <emailPreview :email="email"></emailPreview>
            </li>
        </section>
    `,
    data(){
        return{
            emails:null
        }
    },
    created(){
        this.loadEmails()
    },
    methods:{
        loadEmails(){
            emailService.query()
            .then(emails => this.emails=emails)
        },
        
    },
    computed:{

    },
    components:{
        emailPreview
    }
}