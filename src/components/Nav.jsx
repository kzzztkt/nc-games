import { Link } from 'react-router-dom'


function Nav () {
  return (
    <header>
        <div className="navBar">
       <h1>Bens Shop</h1>
        <Link to='/reviews'>
        <p>Reviews</p>
        </Link>
            <form>
                <label htmlFor="categories" name="categories">
                    <select name="categories" id="categories">
                        <option value="placeholder" id="categories">placeholder1</option>
                        <option value="placeholder" id="categories">placeholder2</option>
                        <option value="placeholder" id="categories">placeholder3</option>
                     </select>
            </label>
            </form>
        <Link to='/users'>
        <p>Users</p>
        </Link>
        </div>
    </header>
  )
}


export default Nav