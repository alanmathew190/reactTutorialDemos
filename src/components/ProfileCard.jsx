import React from 'react'
import './profilecard.css'

function ProfileCard({persons}) {
  return (
      <div className='profile'>
          {persons.map((person,i) => (
              <div className='profilecard' key={i}>
            <img src={person.image} alt="img" />
          <h1>{person.name}</h1>
          <p>{ person.des}</p>
              </div>
          ))}
          
    </div>
  )
}

export default ProfileCard