// import emailApp from "../pages/email-app.js"
// export default {
//     props: ['cars'],
//     template: `
//     <ul class="car-list">
//         <li v-for="car in cars" :key="car.id" class="car-preview-container">
//             <car-preview :car="car" @click.native="log(car.id)" />
//             <div class="actions">
//                 <button @click="remove(car.id)">X</button>
//                 <router-link :to="'/car/'+car.id">Details</router-link>
//                 <router-link :to="'/car/edit/'+car.id">Edit</router-link>
//             </div>
//         </li>
//     </ul>
//     `,