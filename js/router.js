import bookApp from "./apps/book/pages/book-app.js"
import emailApp from "./apps/mail/pages/email-app.js"
import homePage from "./pages/homepage.js"
import notesApp from "./apps/keep/pages/notes-app.js"

const routes =[
    {
        path:'/',
        component:homePage
    },
    {
        path:'/emails',
        component:emailApp
    },
    {
        path:'/notes',
        component: notesApp
    },
    {
        path:'/books',
        component: bookApp
    },
    // {
    //     path:'/books/:bookId',
    //     component:bookDetails
    // },
]
export const router = new VueRouter({routes})
