import Vue from 'vue'
import Router from 'vue-router'
import LandingPage from '@/components/LandingPage'
import Timeline from '@/components/Timeline'
import SignUp from '@/components/SignUp'
import Location from '@/components/Location'
// import FakeLocation from '@/components/FakeLocation'
import Profile from '@/components/Profile'
import EditProfile from '@/components/EditProfile'
import Neighbours from '@/components/Neighbours'
import Shop from '@/components/Shop'
import ProductDescription from '@/components/ProductDescription'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage,
    },
    {
      path: '/timeline/:userId?',
      name: 'Timeline',
      component: Timeline,
      meta: {
        authRequired: true,
      },
    },
    {
      path: '/sign-up',
      name: 'SignUp',
      component: SignUp
    },
    // {
    //   path: '/timeline/:userId/fake-location',
    //   name: 'FakeLocation',
    //   component: FakeLocation
    // },
    {
      path: '/timeline/location',
      name: 'Location',
      component: Location
    },
     {
       path: '/timeline/profile',
       name: 'Profile',
       component: Profile
     },
     {
       path: '/timeline/profile/edit-profile',
       name: 'EditProfile',
       component: EditProfile
     },
     {
       path: '/timeline/neighbours',
       name: 'Neighbours',
       component: Neighbours
     },
     {
       path: '/timeline/shop',
       name: 'Shop',
       component: Shop
     },
     {
       path: '/timeline/shop/:productDescription',
       name: 'ProductDescription',
       component: ProductDescription
     }
  ]
})
// Profile, EditProfile, Shop, ProductDescription

// const router = createRouter({
//   // history: createWebHistory(process.env.BASE_URL),
//   routes
// })

router.beforeEach((to, from, next) => {
  let token = localStorage.getItem('token')
  if (to.name !== "LandingPage" && !token) next({ name: 'LandingPage' })
  if (to.name === "SignUp" && !token) next(true)
  else next()
});

export default router
