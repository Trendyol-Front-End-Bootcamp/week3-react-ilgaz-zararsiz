import { createUrlQuery } from '../util'

describe('Util Tests', () => {
    it('should create url query', () => {
        //arrange
        const expectedResult = '?gender=female&status=dead&page=1';
        const filters = {
            gender: 'female',
            status: 'dead',
            page: 1
        }

        //act
        const actualResult = createUrlQuery(filters);

        //assert
        expect(actualResult).toEqual(expectedResult);
    }) 

    it('should not add & at the end of the result', () => {
        //arrange
        const filters = {
            gender: 'female',
            status: 'dead',
            page: 1
        }

        //act
        const actualResult = createUrlQuery(filters);

        //assert
        expect(actualResult.charAt(actualResult.length-1) === '&').toBeFalsy();
    }) 

    it('should return empty string when no filter applied', () => {
        //arrange
        const expectedResult = '';
        const filters = {}

        //act
        const actualResult = createUrlQuery(filters);

        //assert
        expect(actualResult).toEqual(expectedResult);
    }) 

    it('should add question mark (?) at the begining of the result', () => {
        //arrange
        const filters = {
            x: 'a',
            y: 'b',
            z: 'c'
        }

        //act
        const actualResult = createUrlQuery(filters);

        //assert
        expect(actualResult.charAt(0) === '?').toEqual(true);
    }) 
})