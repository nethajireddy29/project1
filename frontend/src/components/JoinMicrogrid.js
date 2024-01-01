import React from 'react'
import { useNavigate } from 'react-router-dom'

function JoinMicrogrid() {
    const navigate = useNavigate()
  return (
    <div>
        <div className="join-microgrid">
            <AvailableMicrogrid />
        </div>
        <div className="create-microgrid">
            <button onClick={()=>{navigate("/addMicrogrid")}}>Create a Microgrid</button>
        </div>

      
    </div>
  )
}


export default JoinMicrogrid
