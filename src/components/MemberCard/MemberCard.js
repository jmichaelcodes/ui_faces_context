import React from 'react'

import './MemberCard.css'

function MemberCard({ img, name }) {
    return (
        <div className='card-container'>
            <img src={img} />
            <p>{name}</p>
        </div>
    )
}

export default MemberCard