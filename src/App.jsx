import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews'
import Users from './components/Users'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Nav/>}/>
      <Route path="/reviews" element={[<Nav/>, <Reviews/>]}/>
      <Route path="/users" element={[<Nav/>, <Users/>]}/>


    </Routes>
  )
}

export default App
