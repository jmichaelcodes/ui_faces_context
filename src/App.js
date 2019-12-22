import React, { useEffect, useState } from 'react'
import Home from './screens/Home/Home'
import { TeamMemberProvider } from './context/TeamMemberContext'

function App() {
  const [members, setMembers] = useState([])
  useEffect(() => {
    fetch('https://uifaces.co/api?limit=6', {
      method: 'GET',
      headers: {
        'X-API-KEY': 'aba301ba66db8a8b64afafbf07dc47',
        'Accept': 'application/json',
        'Cache-Control': 'no-cache'
      }
    }).then(response => response.json())
      .then(data => {
        setMembers(data)
      });
  }, [])

  return (
    <TeamMemberProvider value={members}>
      <Home />
    </TeamMemberProvider>
  )
}

export default App