import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Country } from './pages/Country'
import { Contact } from './pages/Contact'

const router = createBrowserRouter([
  {
    path : '/',
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
])

const App = () =>{
  return (<h1>Hello</h1>)
}
export default App