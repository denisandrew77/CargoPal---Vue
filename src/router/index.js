import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Decidingpage from '../components/DriverPages/Decidingpage.vue'
import DriverSignIn from '../components/DriverPages/DriverSignIn.vue'
import Loading from '../components/DriverPages/Loading.vue';
import Delivery from '../components/DriverPages/Delivery.vue';
import OrderDone from '../components/DriverPages/OrderDone.vue';
import CreateCompanyAccount from '../components/CompanyPages/CreateCompanyAccount.vue';
import CompanySignIn from '../components/CompanyPages/CompanySignIn.vue';
import AddNewVehicle from '../components/CompanyPages/AddNewVehicle.vue';
import CompanyMainMenu from '../components/CompanyPages/CompanyMainMenu.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'DecidingPage',
            component: Decidingpage
        },
        {
            path: '/driverSignIn',
            name: 'DriverSignIn',
            component: DriverSignIn
        },
        {
            path: '/loading',
            name: 'Loading',
            component: Loading
        },
        {
            path: '/delivery',
            name: 'Delivery',
            component: Delivery
        },
        {
            path: '/orderDone',
            name: 'OrderDone',
            component: OrderDone
        },
        {
            path: '/createCompanyAccount',
            name: 'CreateCompanyAccount',
            component: CreateCompanyAccount
        },
        {
            path: '/companySignIn',
            name: 'CompanySignIn',
            component: CompanySignIn
        },
        {
            path: '/addNewVehicle',
            name: 'addNewVehicle',
            component: AddNewVehicle
        },
        {
            path: '/companyMainMenu',
            name: 'CompanyMainMenu',
            component: CompanyMainMenu
        }
    ],
})

export default router;
