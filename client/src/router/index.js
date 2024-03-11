import {createRouter, createWebHashHistory} from 'vue-router'
import RegistrationLogin from '@/views/RegistrationLogin'

import HomeView from '@/views/HomeView'

import SongsPage from '@/views/SongsPage'
import CreateSong from '@/views/CreateSong'
import SongView from '@/views/SongView'

import ProfileView from '@/views/ProfileView'


import BookmarksView from '@/views/BookmarksView'

const routes = [
    { path: '/register', component: RegistrationLogin },
    { path: '/', component: HomeView, alias: '/home' },

    { path: '/songs', component: SongsPage},
    { path: '/songs/create', component: CreateSong},
    { path: '/songs/:songId', component: SongView},

    { path: '/profile', component: ProfileView},
    { path: '/bookmarks', component: BookmarksView }
]



export default createRouter({
    history: createWebHashHistory(),
    routes, // short for `routes: routes`
})