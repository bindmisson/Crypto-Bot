import React from 'react'
import { useParams } from 'react-router-dom'

function ReferringMiddlePage(props) {

    const params=useParams()
    const rid=params.rid
    localStorage.setItem('rid', rid)
    document.location.href='http://192.168.43.189:3001/'

  return (
    <div>
        {/* alert(props.rid) */}
        {}
    </div>
  )
}

export default ReferringMiddlePage