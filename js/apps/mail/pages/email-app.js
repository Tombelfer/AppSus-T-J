import { emailService } from "../services/email-service.js"
import emailPreview from "../cmps/email-preview.js"
import emailList from "../cmps/email-list.js"

export default {
    template: `
        <section class="">
            <div >{{this.emails}}</div>
            emails
                <emailList :emails="emails"></emailList>
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
    components:{
        emailPreview,
        emailList
    }
}