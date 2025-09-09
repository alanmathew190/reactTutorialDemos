import React from 'react'
// import './profilecard.css'

function ProfileCard({persons}) {
    return (
    
        <div className="profile_card">
            {persons.map((person, i) =>
            <div  key={i}>
                <img src={person.img} alt={name} />
                <h1>{person.name}</h1>
                    <p>{persons.description}</p>
                    </div>
                )}
            </div>
            
  )
}

export default ProfileCard