import React, { useEffect } from 'react'

const SearchForm = ({ setSearchTerm }) => {

  return (
    <div className="py-20 px-20">
      <form className="w-[85vw] my-0 mx-auto max-w-2xl bg-white py-8 px-10 capitalize rounded shadow">
      <div className="flex-col space-y-3">
        <label htmlFor="name" className="text-green-800 text-2xl font-semibold">
          search your favorite cocktail
        </label>
      </div>
      </form>

    </div>
  )
}

export default SearchForm
