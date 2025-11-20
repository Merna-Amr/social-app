import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './pages/Layout'
import Login from './pages/Login'

import Notfound from './pages/Notfound.jsx'
import Home from './pages/home'
import  AuthContextProvider  from './lib/context/loginConText.jsx'
import Register from './pages/Register.jsx'
import ProtectRout from './components/ProtectRout.jsx'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import PostDetails from './pages/PostDetails.jsx'
import Profile from './pages/Profile.jsx'
import { Toaster } from 'react-hot-toast'
  
 const queryClient = new QueryClient()
  
export default function App() {
  const routes =createBrowserRouter([
    {
      path:"/", element:<Layout/>, children:[
        {index:true, element:<Login/>},
        {path:"home", element:<ProtectRout><Home/></ProtectRout>},
         {path:"/posts/:id", element:<ProtectRout><PostDetails></PostDetails></ProtectRout>},
         {path:"/profile/:id", element:<ProtectRout><Profile></Profile></ProtectRout>},
        {path:"register", element:<Register/>},
        {path:"*", element:<Notfound/>},
      ]
    }
  ])
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster></Toaster>
 <ReactQueryDevtools initialIsOpen={false} />
       <AuthContextProvider >

  <RouterProvider router={routes}></RouterProvider>
</AuthContextProvider>


    </QueryClientProvider>
   
  )
}
