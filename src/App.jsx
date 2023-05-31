import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews'
import Users from './components/Users'
import Review from './components/Review'
import Welcome from './components/Welcome'





function App() {


  return (
    <div className='app'>
    <Nav/>
    <Routes>
      <Route path="/" element={<Welcome/>}/>
      <Route path="/reviews" element={<Reviews/>}/>
      <Route path="/users" element={<Users/>}/>
      <Route path="/reviews/:review_id" element={<Review/>}/>
    </Routes>
    </div>
  )
}

export default App
