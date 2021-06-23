import { emailService } from "../services/email-service.js"

export default {
    props:["email"],
    template: `
    <div>
        <p>From: {{email.from}}</p>
        <p>Subject: {{email.subject}}</p>
    </div>
    `,
    data(){
        return{
            email:this.email
        }
    },
    created
}