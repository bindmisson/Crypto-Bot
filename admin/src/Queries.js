import { TableCell, TableHead, TableRow, Table } from '@mui/material'
import {useState} from 'react'
import React from 'react'

function Queries() {

    const [queries, sequeries] = useState('')
    const [queriesLoaded, setqueriesLoaded] = useState(false)

    async function loadQueries(){
        const response=await fetch('http://20.193.147.19:8080/getQueries')
        const data=await response.json()
        console.log(data)

        setqueriesLoaded(true)
    }
    loadQueries()

  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight:'600'}}>S No.</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    </div>
  )
}

export default Queries