export default{
    template:`
        <div class=" header-container">
            <header class="app-header main-layout flex space-between align-center">
                <div class="logo">
                    <router-link to="/" class="logo"><img src="img/logo.png" alt=""></router-link>
                </div>
                <nav class="main-nav clean-list flex">
                        <router-link to="/books/sale"><li>SALE</li></router-link>
                        <router-link to="/books"><li>books</li></router-link>
                        <router-link to="/about"><li>About</li></router-link>
                </nav>
            </header>
        </div>
    `
}