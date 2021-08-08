import axios from 'axios'
import { createUrlQuery } from '../util'

const BASE_URL = 'https://rickandmortyapi.com/api/character';

export const getAllCharacters = async () => {
    const apiResult = await axios.get(BASE_URL);
    return apiResult;
}

export const filterCharacters = async (filterOptions) => {
    const apiResult = await axios.get(`${BASE_URL}/${createUrlQuery(filterOptions)}`);
    return apiResult;
}

