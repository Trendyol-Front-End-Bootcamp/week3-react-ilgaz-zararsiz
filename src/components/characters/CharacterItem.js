import React from 'react'

const CharacterItem = ({ item }) => {
    return (
        <div className='card'>
            <img src={item.image} alt='' className='character-image'/>
          <div>
          <div className='card-detail'>
            <h1>{item.name}</h1>
            <ul>
              <li>
                <strong>Name:</strong> {item.name}
              </li>
              <li>
                <strong>Gender:</strong> {item.gender}
              </li>
              <li>
                <strong>Location:</strong> {item.location.name}
              </li>
              <li>
                <strong>Status:</strong> {item.status}
              </li>
            </ul>
          </div>
          </div>
        </div>
         
    )
}

export default CharacterItem
