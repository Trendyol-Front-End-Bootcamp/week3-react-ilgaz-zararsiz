import React from 'react'
import CharacterItem from './CharacterItem'
import Loading from '../ui/Loading'


const CharacterGrid = ({ items, isLoading }) => {
    return isLoading ? <Loading></Loading> : <section className='cards'>

        {items.results.map(item => (
            <CharacterItem key={item.id} item={item}></CharacterItem>
        ))}
    </section>
}

export default CharacterGrid
