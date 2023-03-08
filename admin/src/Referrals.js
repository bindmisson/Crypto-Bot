import { TableHead, TableRow, Table, TableCell, TableBody } from '@mui/material'
import React, {useState} from 'react'

function Referrals() {

    const [referrals, setreferrals] = useState('')
    const [referralsLoaded, setreferralsLoaded] = useState(false)

    async function getReferrals(){
        const response=await fetch('http://20.193.147.19:8080/get-referrals')
        const data= await response.json()
        console.log(data)
        setreferrals(JSON.stringify(data))
        setreferralsLoaded(true)
    }
    getReferrals()
    let a=0

  return (
    <div>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell style={{fontWeight:'600'}}>S No.</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Referred By</TableCell>
                    <TableCell style={{fontWeight:'600'}}>Referred To</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {referralsLoaded ? JSON.parse(referrals).map((i)=>{
                    a++
                    return <TableRow><TableCell>{a}</TableCell><TableCell>{i.by}</TableCell><TableCell>{i.to}</TableCell></TableRow>
                }):''}
            </TableBody>
        </Table>
    </div>
  )
}

export default Referrals