import axios from 'axios'
import getAllCharactersResponse from './response/getAllCharactersResponse.json'
import filteredCharactersResponse from './response/filteredCharactersResponse.json'
import { getAllCharacters, filterCharacters } from '../api'

jest.mock('axios');

describe('Rick and Morty Api Test',  () => {
    it('should return characters', async () => {
        //arrange
        const response = getAllCharactersResponse;
        axios.get.mockImplementation(() => {
            return Promise.resolve(response);
        })

        //act
        const actualResult = await getAllCharacters();

        //assert
        expect(actualResult.results.length).toEqual(response.results.length);
    })

    it('should filter characters', async () => {
        //arrange
        const response = filteredCharactersResponse;
        axios.get.mockImplementation(() => {
            return Promise.resolve(response);
        })

        const filterOptions = {
            gender: 'female',
            status: 'dead',
            page: 1
        }

        //act
        const actualResult = await filterCharacters(filterOptions);

        //assert
        expect(actualResult.results).toBeInstanceOf(Array);
    })
})
