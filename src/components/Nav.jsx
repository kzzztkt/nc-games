import { Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react';
import { getCategories } from '../utils/utils';
import Category from './Category';


function Nav () {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  function handleSearch(event){
    event.preventDefault();
    if(event.target.categories.value === 'all'){
      navigate(`/reviews`)
    } else {
    navigate(`/reviews/categories/${event.target.categories.value}`)
    }
  }

  useEffect(() =>{
    getCategories()
    .then((data) => {
        setCategories([...data])
      })
    }, [])

  return (
    <header>
        <div className="navBar">
       <h1>Bens Shop</h1>
        <Link to='/reviews'>
        <p>Reviews</p>
        </Link>
            <form onSubmit={handleSearch}>
                <label htmlFor="categories" name="categories">
                    <select name="categories" id="categories">
                    <option value='all' id="categories">- select all -</option>
                      {categories.map((category) => {
                        return(
                          <option key={`${category.slug}`} value={`${category.slug}`} id="categories">{`${category.slug}`}</option>
                        )
                      })}
                     </select>
            </label>
            <button type='submit'>Search</button>
            </form>
        <Link to='/users'>
        <p>Users</p>
        </Link>
        </div>
    </header>
  )
}


export default Nav