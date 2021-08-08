import React, { useState, useEffect } from 'react'
import Header from './components/ui/Header'
import CharacterGrid from './components/characters/CharacterGrid'
import Filter from './components/ui/Filter'
import { Pagination } from '@material-ui/lab';
import {getAllCharacters, filterCharacters} from './api'

import './App.css';

const App = () => {

  const [result, setResult] = useState({}); 
  const [isLoading, setIsLoading] = useState(true); 
  const [filterOptions, setFilterOptions] = useState({
    gender: '',
    status: '',
    page: 1
  });
  
  const callGetAllCharacters = async () => {    
    setIsLoading(true);
    const allCharacters = await getAllCharacters();
    setResult(allCharacters);
    setIsLoading(false);
  }

  const callfilterCharacters = async () => {
    setIsLoading(true);
    const filteredCharacters = await filterCharacters(filterOptions);
    setResult(filteredCharacters);
    setIsLoading(false);
  }

  useEffect(() => {
    callGetAllCharacters();
  }, [])

  useEffect(() => {
    filterOptions && callfilterCharacters();
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
