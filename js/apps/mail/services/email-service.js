import { utilService } from "../../book/services/util-service.js";
import { storageService } from "../../book/services/async-storage-service.js";

const EMAILS_KEY =' emails'
const gEmails =_createEmails

export const emailService = {
    query,
    remove,
    save,
    getById,
    getNextCarId
};
function query(){
    return storageService.query(EMAILS_KEY)
    .then(emails => {
        if(!emails.length){
            storageService.postMany(EMAILS_KEY,_createEmails())
            return _createEmails()
        }
        return emails
    })
}
function remove(emailId) {
    return storageService.remove(EMAILS_KEY, emailId);
}

function save(email) {
    if (email.id) {
        return storageService.put(EMAILS_KEY, email);
    } else {
        return storageService.post(EMAILS_KEY, email);
    }
}

function getById(emailId) {
    return storageService.get(EMAILS_KEY, emailId);
}

function getNextCarId(emailId) {
    return query()
        .then(emails => {
            const idx  = emails.findIndex(email => email.id === emailId)
            return (idx === emails.length-1)? emails[0].id :  emails[idx+1].id
        })
}
function _createEmails(){
        const emails=[]
        emails.push((_createEmail('Wassap?','Pick up!')))
        console.log*emails
    return emails
}



function _createEmail(subject,body){
    const email= {
        id:utilService.makeId(),
        subject,
        body,
        sentAt:Date.now(),
        isread:true
    }
    return email
}