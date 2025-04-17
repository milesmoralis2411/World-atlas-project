import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'
import { AppLayout } from './components/AppLayout'
import { ErrorPage } from './pages/ErrorPage'
import {createBrowserRouter,  RouterProvider } from 'react-router-dom'
const router = createBrowserRouter([
  {
    path : '/',
    element : <AppLayout/>,
    errorElement : <ErrorPage/>,
    children : [
      {
        path : '',
        element : <Home/>
      },
      {
        path : 'about',
        element : <About/>
      },
      {
        path : 'contact',
        element : <Contact/>
      },
      {
        path : 'country',
        element : <Country/>
      }
    ]
      
    }
  
  
])

const App = () =>{
  return (<RouterProvider router={router}>

  </RouterProvider>)
}
export default App