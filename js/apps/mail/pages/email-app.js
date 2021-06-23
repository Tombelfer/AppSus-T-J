import { emailService } from "../services/email-service.js"

export default {
    template: `
        <section class="">
            <div >{{this.emails}}</div>
            emails
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
            
        }
    }
}