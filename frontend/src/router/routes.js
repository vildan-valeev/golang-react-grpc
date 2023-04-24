import About from "../pages/About";
import Posts from "../pages/Posts";
import PostDetail from "../pages/PostDetail";
import Home from "../pages/Home";

export const publicRoutes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostDetail},
  {path: '/error', component: Error},

]

export const privateRoutes = [
  {path: '/', component: Home},
  {path: '/about', component: About},
  {path: '/posts', component: Posts},
  {path: '/posts/:id', component: PostDetail},

]