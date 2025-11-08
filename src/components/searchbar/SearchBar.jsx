import { useState } from 'react'
import './searchbar.scss'

const SearchBar = () => {

  const types = ["buy", "rent"]

  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0
  })

  const changeType = (val) => {
    setQuery((prev) => ({
      ...prev,
      type: val
    }))
  }

  console.log(query.type);


  return (
    <div className="searchBar">
      <div className="type">
        {
          types.map((type) => (
            <button className={`${query.type == type ? 'active' : ''}`} key={type} onClick={() => changeType(type)}>
              {type}
            </button>
          ))
        }
      </div>
      <form action="">
        <input type="text" name="location" placeholder="City Location" />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
        />
        <button>
          <img src="/search.png" alt="" />
        </button>
      </form>


    </div>
  )
}

export default SearchBar
