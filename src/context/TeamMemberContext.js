import React from 'react'

const TeamMemberContext = React.createContext({})

export const TeamMemberProvider = TeamMemberContext.Provider
export const TeamMemberConsumer = TeamMemberContext.Consumer
export default TeamMemberContext