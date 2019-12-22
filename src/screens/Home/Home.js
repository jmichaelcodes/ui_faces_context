import React, { useContext } from 'react'
import TeamMemberContext from '../../context/TeamMemberContext'
import MemberCard from '../../components/MemberCard/MemberCard'

import './Home.css'

function Home() {
    const members = useContext(TeamMemberContext)
    
    return (
        members.length === 0 ? null : (
            <div className='home-container'>
                <div className='our-team'>
                    <h1>Our Team</h1>
                    <div className='members-container'>
                        {members.map((member) => {
                            return (
                                <MemberCard img={member.photo} name={member.name} />
                            )
                        })}
                    </div>
                </div>
                <div className='our-story'>
                    <h1 className='our-story-mobile-header'>Our Story</h1>
                    <h1 className='our-story-desktop-header'>About Us</h1>
                    <p>Today, our company is a family-owned business operating 21 store locations across Indiana. each store offers a range of eye health services that help patients correct and protect their vision. In addition, our stores carry a large selection of designer frames and fashion-forward eyewear for Women, Men and Kids.<br /><br />More than 75 years later, We've helped Indiana residents maintian quality vision and find their perfect pair of eyewear still remains today throughout all our stores.</p>
                </div>
            </div>
        )
    )
}

export default Home