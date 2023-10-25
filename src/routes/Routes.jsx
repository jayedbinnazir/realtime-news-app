import { Navigate, createBrowserRouter } from 'react-router-dom'
import { Main } from '../layout/Main'
import { Home } from '../pages/Home/Home/Home'
import { Category } from '../pages/Home/category/Category'
import { NewsLayout } from '../layout/NewsLayout'
import { News } from '../pages/news/news/News'
import { LoginLayout } from '../layout/LoginLayout'
import { Register } from '../pages/login/register/Register'
import { Login } from '../pages/login/login/Login'
import { Private } from './privateroute/Private'

export const routers = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayout/>,
        children:[
            {
                path:'/',
                element:<Navigate to={`/category/0`} replace={true} />
            },
            {
                path:"login",
                element:<Login/>
            },
            {
                path:'register',
                element:<Register/>
            }
        ]
       },
    {
        path:'category',
        element:<Main/>,
        children:[
            
            // {
                
            //     element:<Category/>,
            //     loader:({params})=>fetch(`http://localhost:5000/api/categories/${params.id=0}`),
            //     index:true
                
            // },
            {
                path:':id',
                element:<Category/>,
                loader:({params})=>fetch(`http://localhost:5000/api/categories/${params.id}`),
                
            }
        ],
        
    },
    {
        path:'/news',
        element:<NewsLayout/>,
        children:[
            {
                path:':id',
                element:<Private><News/></Private>
            }
        ]
    }
 
   
])