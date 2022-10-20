import React from 'react'
import { useParams } from 'react-router-dom'

function ReferringMiddlePage(props) {

    const params=useParams()
    const rid=params.rid
    localStorage.setItem('rid', rid)
    document.location.href='http://localhost:3000/'

  return (
    <div>
        {/* alert(props.rid) */}
        {}
    </div>
  )
}

export default ReferringMiddlePage