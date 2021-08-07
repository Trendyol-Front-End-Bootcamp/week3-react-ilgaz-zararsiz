import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Filter from './components/ui/Filter'
import { Pagination } from '@material-ui/lab';
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


  const handlePageChange = (e, value) => {
    setFilterOptions({
      ...filterOptions,
      page: value
    });
  }

  return (
    <div className="container">
      <div className="bg"></div>
      <Header></Header>
      <Filter setFilterOptions={setFilterOptions} filterOptions={filterOptions}></Filter>
      <CharacterGrid isLoading={isLoading} items={result?.data}></CharacterGrid>
      <div className="pagination-container white-container">
        <Pagination count={result?.data?.info?.pages ?? 0} size="large" color="secondary" onChange={handlePageChange}/>
      </div>
    </div>
  );
}

export default App;
