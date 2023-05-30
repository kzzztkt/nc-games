import Nav from './components/Nav'
import { Routes, Route } from 'react-router-dom'
import Reviews from './components/Reviews'
import Users from './components/Users'
import Review from './components/Review'



function App() {


  return (
    <Routes>
      <Route path="/" element={<Nav/>}/>
      <Route path="/reviews" element={[<Nav/>, <Reviews/>]}/>
      <Route path="/users" element={[<Nav/>, <Users/>]}/>
      <Route path="/reviews/:review_id" element={[<Nav/>, <Review/>]}/>



    </Routes>
  )
}

export default App
