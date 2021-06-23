import appSusHeader from "../cmps/appSus-header.js";
export default {
    template: `
        <section class="">
            <appSusHeader></appSusHeader>
            homePage
            <button>
                <router-link to="/emails">emails</router-link>
            </button>
            <button>
            <router-link to="/notes">notes</router-link>
            </button>
            <button>
            <router-link to="/books">books</router-link>
            </button>
        </section>
    `,
    components:{
        appSusHeader
    }
};