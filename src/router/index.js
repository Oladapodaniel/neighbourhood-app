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
import Splash from '@/components/Splash'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LandingPage',
      component: LandingPage
    },
    {
      path: '/timeline/:userId',
      name: 'Timeline',
      component: Timeline
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
      path: '/timeline/:userId/location',
      name: 'Location',
      component: Location
    },
     {
       path: '/timeline/:userId/profile',
       name: 'Profile',
       component: Profile
     },
     {
       path: '/timeline/:userId/profile/edit-profile',
       name: 'EditProfile',
       component: EditProfile
     },
     {
       path: '/timeline/:userId/neighbours',
       name: 'Neighbours',
       component: Neighbours
     },
     {
       path: '/timeline/:userId/shop',
       name: 'Shop',
       component: Shop
     },
     {
       path: '/timeline/:userId/shop/:productDescription',
       name: 'ProductDescription',
       component: ProductDescription
     },
     {
       path: '/splash',
       name: 'Splash',
       component: Splash
     }
  ]
})
