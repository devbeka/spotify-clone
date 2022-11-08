import React, { useState } from 'react'
import { FiSearch, FiTarget } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'

const Searchbar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/search/${searchTerm}`)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-2 text-gray-400 focus-within:text-gray-600"
      autoComplete="off"
    >
      <label className="sr-only" htmlFor="search-feild">
        Search all songs
      </label>
      <div className="flex flex-row justify-start items-center">
        <FiSearch className="w-5 h-5 ml-4" onClick={handleSubmit}/>
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          name="search-feild"
          autoComplete="off"
          id="search-feild"
          placeholder="Search"
          className="flex-1 bg-transparent outline-none border-none placeholder-gray-500 text-base text-white p-4"
        />
      </div>
    </form>
  )
}

export default Searchbar
