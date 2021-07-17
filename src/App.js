import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Filter from './components/ui/Filter'
import Pagination from './components/ui/Pagination'
import './App.css';

const App = () => {

  const [result, setResult] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 
  const [filterOptions, setFilterOptions] = useState();
  
  useEffect(() => {
    const genderFilter = filterOptions?.gender ?? '';
    const statusFilter = filterOptions?.status ?? '';
    const pageFilter = filterOptions?.page ?? '';
    const url = `https://rickandmortyapi.com/api/character/?gender=${genderFilter}&status=${statusFilter}&page=${pageFilter}`;

    const fetchItems = async () => {
      const apiResult = await axios(url);

      setResult(apiResult);
      setIsLoading(false);
    }
    
    console.log(result);

    fetchItems();
  }, [filterOptions])


  return (
    <div className="container">
      <Header></Header>
      <Filter setFilterOptions={setFilterOptions} filterOptions={filterOptions}></Filter>
      <CharacterGrid isLoading={isLoading} items={result?.data}></CharacterGrid>
      <Pagination setFilterOptions={setFilterOptions} filterOptions={filterOptions} pages={result?.data?.info?.pages ?? 0}></Pagination>
    </div>
  );
}

export default App;
