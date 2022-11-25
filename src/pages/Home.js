import React from 'react'
import SearchForm from '../components/SearchForm'
import CocktailList from '../components/CocktailList'

const Home = ({ setView, setCocktailId, setSearchTerm, cocktails, loading }) => {
  return (
    <div>
      <SearchForm />
    </div>
  )
}

export default Home
