import Profile from '../pages/Profile';
import Home from '../pages/Home';
import Chat from '../pages/Chat';
import Newsfeed from '../pages/Newsfeed';


const publicRoutes = [
    {path : '/', component : Home},
    {path : '/newsfeed', component : Newsfeed},
    {path : '/chat', component : Chat},
    {path:'/profile', component : Profile}
]

const privateRoutes = [

]

export {privateRoutes,publicRoutes}