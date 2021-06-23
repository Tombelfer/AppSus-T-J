import appHeader from "./apps/book/cmps/appHeader.js"
import appFooter from "./apps/book/cmps/appFooter.js"
import { eventBus } from "./apps/book/services/event-bus-service.js"
import { router } from "./router.js"


const options = {
    el: '#app',
    router,
    template: `
    <section class="app">
        <app-header></app-header>  
        <router-view class="main-app"></router-view>
        <app-footer></app-footer>
    </section>
    `,
    components: {
        eventBus,
        appHeader,
        appFooter,
    }
}
const app = new Vue(options)