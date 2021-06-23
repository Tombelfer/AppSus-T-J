export const eventBus = new Vue()
export function showMsg(msg) {
    eventBus.$emit('show-msg', msg)
}

// eventBus.$on('puk', ()=>{
//     console.log('someone just puked');
// })

// eventBus.$on('puk2', ()=>{
//     console.log('me too!');
// })