import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Users from '@/components/users'
import Contact from '@/components/contact'
import AddUser from '@/components/AddUser'
import UpdateUser from '@/components/UpdateUser'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/users',
      name: 'Users',
      component: Users
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    },
    {
      path: '/adduser',
      name: 'AddUser',
      component: AddUser
    },
    {
      path: '/updateuser/:userId',
      name: 'UpdateUser',
      component: UpdateUser
    }
  ]
})
