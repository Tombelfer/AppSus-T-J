
export default {
    props:["email"],
    template: `
    <div :class="isRead">
        <p>From: {{email.from}}</p>
        <p >Subject: {{email.subject}}</p>
    </div>
    `,
    computed:{
        isRead(){
            if(!this.email.isRead){
                return 'un-read'
            }
        }
    }
}