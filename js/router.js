import bookApp from "./apps/book/pages/book-app.js"
import homePage from "./apps/book/pages/home-page.js"
import bookDetails from "./apps/book/cmps/book-details.js"
const routes =[
    {
        path:'/',
        component:homePage
    },
    {
        path:'/books',
        component:bookApp
    },
    {
        path:'/books/:bookId',
        component:bookDetails
    },
]
export const router = new VueRouter({routes})
